import { Stack, Flex, Spacer, Heading, Center } from "@chakra-ui/react";
import CategoryTile from "./CategoryTile";

export default function Category() {
  const glass = {
    height: "200px",
    width: "390px",
    title: "Glassware",
    imgUrl: "/glass.jpeg",
  };
  const cups = {
    height: "200px",
    width: "390px",
    title: "Earthenware",
    imgUrl: "/earthenware.webp",
  };
  const kitchen = {
    height: "200px",
    width: "520px",
    imgUrl: "/kitchen.jpg",
    title: "Kitchen Essentials",
  };
  const bathroom = {
    height: "200px",
    width: "520px",
    imgUrl: "/bathroom.jpg",
    title: "Bathroom Essentials",
  };
    const gift = {
    height: "200px",
    width: "390px",
    imgUrl: "/gift.jpg",
    title: "Gifting",
  };
  const home = {
    height: "200px",
    width: "390px",
    imgUrl: "/decor.jpg",
    title: "Home Decor",
  };

  return (
    <div className="bg-light w-11/12 py-5 rounded-xl mb-10">
      <Center paddingY='20px'>
        <Heading color='brand.500'>Explore Our Range</Heading>
      </Center>
      <Stack direction='column'>
        <Flex paddingX="30px" paddingY="5px">
          <CategoryTile prop={glass} />
          <Spacer />
          <CategoryTile prop={kitchen} />
          <Spacer />
          <CategoryTile prop={cups} />
        </Flex>
        <Flex paddingX="30px" paddingY="5px">
          <CategoryTile prop={home} />
          <Spacer />
          <CategoryTile prop={bathroom} />
          <Spacer />
          <CategoryTile prop={gift} />
        </Flex>
      </Stack>
    </div>
  );
}
