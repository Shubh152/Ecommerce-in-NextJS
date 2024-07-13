import Banner from "./_components/Banner";
import CartDrawer from "./_components/CartDrawer";
import Category from "./_components/CategoryPanel";
import DisplayPanel from "./_components/DisplayPanel";
import Seperator from "./_components/Seperator";
import { Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="bg-mainbg">
      <CartDrawer/>
      <Banner />
      <DisplayPanel heading="NEW ARRIVALS" endpoint="new-arrival"/>
      <Seperator />
      <DisplayPanel heading="TOP SELLING" endpoint="top-selling"/>
      <Center>
        <Category />
      </Center>
    </div>
  );
}
