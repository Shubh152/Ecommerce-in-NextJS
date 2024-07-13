'use client'
import BillTile from "../_components/BillTile";
import OrderList from "../_components/OrderList";
import PathLink from "../_components/PathLink";
import Seperator from "../_components/Seperator";
import { Stack, HStack } from "@chakra-ui/react";

export default function Cart() {
  return (
    <div className="bg-mainbg">
      <Seperator />
      <Stack marginTop="150px" paddingX='30px' paddingY='20px'>
        <PathLink />
        <HStack spacing={10}>
          <OrderList />
          <BillTile/>
        </HStack>
      </Stack>
    </div>
  );
}
