"use client";
import {
  Stack,
  HStack,
  Box,
  Card,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import PathLink from "./PathLink";
import Quantity from "./Quantity";
import Seperator from "./Seperator";
import { useEffect, useState } from "react";
import ThumbNail from "./ThumbNail";
import ZoomModal from "./ZoomModal";
import axios from "axios";
import type { Product } from "../utils/interfaces";
import { useSearchParams } from "next/navigation";

export default function ProductMain() {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [currPhoto, setCurr] = useState<string>();
  const params = useSearchParams();
  const id = params.get("id");

  const handler = (e: any) => {
    setCurr(e.target.src);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/product?id=${id}`)
      .then((response) => {
        const data = response.data.data;
        setData(data);
        setCurr(data.cover);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>loading...</h2>;
  } else {
    const { name, description, price, images, cover }: Product = data;
    console.log(data);
    return (
      <Stack paddingX="30px" paddingY="20px">
        <PathLink />
        <HStack spacing={5} paddingY="20px">
          <Stack>
          <ThumbNail imgUrl={cover} handler={handler} />
            {images.map((image: string) => {
              return <ThumbNail imgUrl={image} handler={handler} />;
            })}
          </Stack>
          <Box
            minWidth="md"
            borderRadius="md"
            borderWidth="1px"
            borderColor="brand.600"
          >
            <ZoomModal currPhoto={currPhoto} />
          </Box>
          <Stack paddingX="50px" spacing={10}>
            <Card
              textColor="brand.600"
              backgroundColor="brand.200"
              variant="filled"
            >
              <Stack spacing={5}>
                <Heading>{name}</Heading>
                <Text>{description}</Text>
                <Heading size="lg">₹{price}</Heading>
              </Stack>
            </Card>
            <Seperator />
            <HStack spacing={15}>
              <Quantity />
              <Button colorScheme="brand" variant="solid" width="250px">
                Buy Now
              </Button>
              <Button colorScheme="brand" variant="outline" width="250px">
                Add to Cart
              </Button>
            </HStack>
          </Stack>
        </HStack>
      </Stack>
    );
  }
}
