import ProductForm from "../_components/ProductForm";
import Seperator from "../_components/Seperator";
import { Stack } from "@chakra-ui/react";
export default function Admin() {
  return (
    <div className="bg-mainbg">
      <Seperator />
      <Stack marginTop="150px" paddingX="30px" paddingY="20px">
        <ProductForm />
      </Stack>
    </div>
  );
}
