import { Stack } from "@chakra-ui/react";
import OrderTile from "./OrderTile";

export default function OrderList() {
  return (
    <div className="bg-mainbg border-text border-solid border">
      <Stack paddingX='30px' paddingY='30px'>
        <OrderTile />
      </Stack>
    </div>
  );
}
