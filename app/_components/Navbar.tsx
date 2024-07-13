"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Flex,
  Image,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import catData from "../categoryData"
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { FaBagShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import HoverMenu from "./HoverMenu";
import { useSetRecoilState } from "recoil";
import { openCart } from "../_store/atoms";

export default function Navbar() {
  const setCart = useSetRecoilState(openCart);
  const router = useRouter();
  return (
    <div className="bg-mainbg px-10 py-2 z-10 fixed border-b border-text">
      <Stack direction="row" spacing={9} align="center" width="full">
        <Image
          onClick={()=>router.push('/')}
          marginBottom="20px"
          src="./habova-logo.png"
          width="210px"
          height="60px"
        />
        <Button
          onClick={() => {
            router.push("/shop");
          }}
          borderRadius="full"
          fontSize="18px"
          colorScheme="brand"
          variant="ghost"
          width="195px"
        >
          Shop
        </Button>
        <Button
          borderRadius="full"
          fontSize="18px"
          colorScheme="brand"
          variant="ghost"
          width="355px"
        >
          New Arrivals
        </Button>
        <Button
          borderRadius="full"
          fontSize="18px"
          colorScheme="brand"
          variant="ghost"
          width="245px"
        >
          Brands
        </Button>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.100" />
          </InputLeftElement>
          <Input
            borderColor="brand.600"
            variant="outline"
            backgroundColor="white"
            type="query"
            placeholder="What are you looking for.."
          />
        </InputGroup>
        <IconButton
          variant="link"
          onClick={() => {
            setCart(true)
          }}
          aria-label="cart"
          icon={<FaBagShopping fontSize="30px" />}
          color="brand.600"
        />
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                transition="all 0.2s"
                width="350px"
                // _hover={{ bg: "gray.400" }}
                // _expanded={{ bg: "blue.400" }}
                // _focus={{ bofithadow: "outline" }}
                borderRadius="full"
                as={Button}
                fontSize="16px"
                colorScheme="brand"
                variant="ghost"
                marginRight="50px"
              >
                {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}Need Help?
              </MenuButton>
              <MenuList>
                <MenuItem>Your Orders</MenuItem>
                <MenuItem>Your Returns</MenuItem>
                <MenuDivider />
                <MenuItem>Returns and Replacements Policy</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Stack>
      <Flex>
        {(catData.keys).map((category)=>{
          return <HoverMenu category={category} subcategories={catData[category]}/>
        })}
      </Flex>
    </div>
  );
}
