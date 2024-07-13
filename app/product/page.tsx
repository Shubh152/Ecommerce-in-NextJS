import ProductMain from "../_components/ProductMain";
import { Stack } from "@chakra-ui/react";
import Seperator from "../_components/Seperator";
import ProductTabs from "../_components/ProductTabs";

export default function ProductPage({id}) {
  return (
    <div className="bg-mainbg">
      <Seperator />
      <Stack marginTop="150px">
        <ProductMain id={id} />
        {/* <ProductTabs review={demo[1].reviews} /> */}
      </Stack>
    </div>
  );
}
