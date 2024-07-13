"use client";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useRecoilValue } from "recoil";
import { brandFilter, priceFilter } from "../_store/atoms";
import { useEffect, useState } from "react";
import { Product } from "../utils/interfaces";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function ProductMenu() {
  // const checkSubset = (parentArray: String[], subsetArray: String[]) => {
  //   return subsetArray.every((el) => {
  //     return parentArray.includes(el);
  //   });
  // };
  const price = useRecoilValue(priceFilter);
  const brand = useRecoilValue(brandFilter);
  const [data, setData] = useState<Product[]>();
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const subcategory = params.get("subcat");

  let shopUrl: string;
  if (subcategory) {
    shopUrl = `http://localhost:3000/api/users/shop?subcat=` + subcategory;
  } else {
    shopUrl = `http://localhost:3000/api/users/shop`;
  }
  useEffect(() => {
    try {
      axios.get(shopUrl).then((response) => {
        const data = response.data as Product[];
        setData(data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }, [shopUrl]);
  // console.log(data);
  if (loading) {
    return <h2>loading..</h2>;
  } else {
    let productsFilter = data;
    if (price != "All") {
      productsFilter = productsFilter.filter(
        (product) => product.price <= parseInt(price)
      );
    }
    if (brand.length != 0) {
      productsFilter = productsFilter.filter((product) =>
        brand.includes(product.brand)
      );
    }
    console.log(productsFilter);
    return (
      <SimpleGrid width="fit" minChildWidth="360px">
        {productsFilter.map((product) => {
          return (
            <ProductCard
              name={product.name}
              id={product.id}
              price={product.price}
              cover={product.cover}
            />
          );
        })}
      </SimpleGrid>
    );
  }
}
