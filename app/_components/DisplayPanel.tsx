"use client"
import { Heading, Center, Button, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../utils/interfaces";

export default function DisplayPanel({ heading, endpoint }) {
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/display?panel=` + endpoint).then((response) => {
      const data: Product[] = response.data.data;
      setData(data);
    });
  }, []);
  return (
    <>
      <Center>
        <Heading
          paddingY="30px"
          alignItems="center"
          color="brand.500"
          fontSize="2.5rem"
        >
          {heading}
        </Heading>
      </Center>
      <SimpleGrid columns={4} spacing={2} paddingX="20px">
        {data.map((product) => {
          return <ProductCard name={product.name} id={product.id} cover={product.cover} price={product.price}/>;
        })}
      </SimpleGrid>
      <Center paddingY="40px">
        <Button
          paddingY="20px"
          borderWidth="2px"
          borderRadius="full"
          width="200px"
          colorScheme="brand"
          variant="outline"
        >
          View All
        </Button>
      </Center>
    </>
  );
}
