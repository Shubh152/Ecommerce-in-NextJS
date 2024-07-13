"use client";
import {
  Text,
  NumberInput,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  Input,
  Textarea,
  Stack,
  Box,
  Img,
  HStack,
  Heading,
  Button,
  Center,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import catData from "../categoryData";

export default function ProductForm() {
  const [images, setImages] = useState<File[]>([]);
  const [coverImage, setCover] = useState<File[]>([]);
  const [productName, setName] = useState<string>("");
  const [productDescription, setDesc] = useState<string>("");
  const [productPrice, setPrice] = useState<number>(100);
  const [category, setCategory] = useState<string>("Select Category");
  const [subcategory, setSubcategory] = useState<string>("Select SubCategory");
  const [subcatArr, setSubcatArr] = useState<string[]>([
    "Select Category First",
  ]);
  const [newArrival, setNew] = useState<boolean>(false);
  const [topSelling, setTop] = useState<boolean>(false);

  const toast = useToast();
  const categories = catData.keys;
  const addImages = (event) => {
    const fileList = event.target.files;
    setImages([...fileList]); // if we do not spread Filelist, array func cant be used
  };
  const addCover = (event) => {
    setCover([...event.target.files]);
  };

  const postForm = async () => {
    try {
      console.log(images);

      const response = await axios.post(
        "http://localhost:3000/api/admin",
        {
          productName,
          productDescription,
          productPrice,
          images,
          coverImage,
          category,
          subcategory,
          new_arrival : JSON.stringify(newArrival),
          top_selling : JSON.stringify(topSelling),
        },
        {
          headers: {
            "Content-Type": "multipart/form-data", // for <input type=file> data
          },
        }
      );
      console.log(response);
      toast({
        position: "top",
        description: "Product Details Sent",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        position: "top",
        description: "Something went wrong, Try Again",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  const removeImage = (event) => {
    const temp = images.filter((image) => image.name != event.target.value);
    setImages(temp);
  };

  const clearForm = async () => {
    setName("");
    setDesc("");
    setPrice(100);
    setCover([]);
    setImages([]);
    toast({
      position: "top",
      description: "Form cleared",
      status: "success",
      isClosable: true,
      duration: 6000,
    });
  };
  return (
    <>
      <Stack>
        <Heading fontSize="20px" margin="10px">
          Product Name
        </Heading>
        <Input
          borderWidth="2px"
          borderColor="brand.600"
          placeholder="Product Name"
          value={productName}
          onChange={(event) => {
            setName(event.target.value);
          }}
          size="sm"
        />
        <Heading fontSize="20px" margin="10px">
          Product Description
        </Heading>
        <Textarea
          borderWidth="2px"
          borderColor="brand.600"
          maxLength={150}
          minLength={20}
          value={productDescription}
          onChange={(event) => {
            setDesc(event.target.value);
          }}
          placeholder="Product Description"
          size="sm"
        />
        <Button
          width="200px"
          margin="10px"
          colorScheme="red"
          onClick={() => {
            setDesc("");
          }}
        >
          Clear Description
        </Button>
        <Heading fontSize="20px" margin="10px">
          Product Price
        </Heading>
        <NumberInput
          max={500000}
          defaultValue={100}
          min={100}
          value={productPrice}
          onChange={(event) => {
            setPrice(parseInt(event));
          }}
        >
          <NumberInputField borderWidth="2px" borderColor="brand.600" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Heading fontSize="20px" margin="10px">
          Category
        </Heading>
        <Menu>
          <MenuButton
            as={Button}
            width="500px"
            colorScheme="brand"
            rightIcon={<ChevronDownIcon />}
          >
            {category}
          </MenuButton>
          <MenuList>
            {categories.map((category) => {
              return (
                <MenuItem
                  minH="48px"
                  onClick={() => {
                    setCategory(category);
                    setSubcatArr(catData[category]);
                  }}
                >
                  <span>{category}</span>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>

        <Heading fontSize="20px" margin="10px">
          SubCategory
        </Heading>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="brand"
            width="500px"
            rightIcon={<ChevronDownIcon />}
          >
            {subcategory}
          </MenuButton>
          <MenuList>
            {subcatArr.map((subcat: string) => {
              return (
                <MenuItem
                  minH="48px"
                  onClick={() => {
                    setSubcategory(subcat);
                  }}
                >
                  <span>{subcat}</span>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>

        <FormControl display="flex" alignItems="center" margin="20px">
          <FormLabel
            htmlFor="new-arrivals"
            fontSize="20px"
            marginBottom="20px"
            mb="0"
          >
            Add to New Arrival List
          </FormLabel>
          <Switch
            onClick={() => {
              setNew(!newArrival);
            }}
            id="new-arrivals"
            size="lg"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" margin="20px">
          <FormLabel
            htmlFor="top-selling"
            fontSize="20px"
            marginBottom="20px"
            mb="0"
          >
            Add to Top Selling List
          </FormLabel>
          <Switch
            onClick={() => {
              setTop(!topSelling);
            }}
            id="top-selling"
            size="lg"
          />
        </FormControl>

        <Heading fontSize="20px" margin="10px">
          Add One Main Image :
        </Heading>
        <Input
          borderWidth="2px"
          borderColor="brand.600"
          onChange={addCover}
          backgroundColor="brand.900"
          type="file"
          accept="image/*"
        />
        <Text fontSize="20px" margin="10px">
          Selected File:
        </Text>
        <Box
          padding="20px"
          borderStyle="dashed"
          borderColor="gray"
          borderWidth="2px"
        >
          {coverImage.length == 0 ? (
            <Text>No image selected. Selected image is previewed here</Text>
          ) : (
            <HStack>
              {coverImage.map((image) => {
                return <Img height="200px" src={URL.createObjectURL(image)} />;
              })}
            </HStack>
          )}
        </Box>
        <Heading fontSize="20px" margin="10px">
          Add images for dimensions, other profiles and designs:
        </Heading>
        <Input
          onChange={addImages}
          borderWidth="2px"
          borderColor="brand.600"
          backgroundColor="brand.900"
          type="file"
          accept="image/*"
          multiple
        />
        <Text fontSize="20px" margin="10px">
          Selected Files:
        </Text>
        <Box
          padding="20px"
          borderStyle="dashed"
          borderColor="gray"
          borderWidth="2px"
        >
          {images.length == 0 ? (
            <Text>No image selected. Selected images are previewed here</Text>
          ) : (
            <HStack overflow="scroll">
              {images?.map((image) => {
                return (
                  <Stack>
                    <Img height="200px" src={URL.createObjectURL(image)} />
                    <Button
                      value={image.name}
                      colorScheme="red"
                      onClick={removeImage}
                    >
                      Remove
                    </Button>
                  </Stack>
                );
              })}
            </HStack>
          )}
        </Box>
        <Center>
          <HStack margin="20px" spacing={6}>
            <Button
              width="250px"
              colorScheme="green"
              variant="solid"
              onClick={postForm}
            >
              Submit
            </Button>
            <Button
              onClick={clearForm}
              width="250px"
              colorScheme="red"
              variant="solid"
            >
              Clear
            </Button>
          </HStack>
        </Center>
      </Stack>
    </>
  );
}
