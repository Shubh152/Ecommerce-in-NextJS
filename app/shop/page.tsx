"use client";
import { Breadcrumb, Stack, Spacer } from "@chakra-ui/react";
import ProductMenu from "../_components/ProductMenu";
import FilterMenu from "../_components/FIlterMenu";
import Seperator from "../_components/Seperator";
import PathLink from "../_components/PathLink";

export default function Shop() {
  return (
    <div className="bg-mainbg">
      <Seperator />
      <Stack marginTop="150px" direction="row" paddingY="20px" paddingX='20px'>
        <FilterMenu />
        <Stack paddingX="10px" spacing={5} width='full'>
          <PathLink />
          <ProductMenu />
        </Stack>
      </Stack>
    </div>
  );
}
