"use client";
import {
  Card,
  CardBody,
  Text,
  Stack,
  Button,
  Image,
  CardFooter,
} from "@chakra-ui/react";
import Seperator from "./Seperator";
import Quantity from "./Quantity";
export default function OrderTile() {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        paddingX="30px"
        paddingY="10px"
        backgroundColor="brand.200"
        variant="filled"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Text as="b" size="md">
              The perfect latte
            </Text>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Quantity />
          </CardFooter>
        </Stack>
      </Card>
      <Seperator />
    </>
  );
}
