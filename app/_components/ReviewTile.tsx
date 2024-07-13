import { Card, CardBody, Text } from "@chakra-ui/react";
import Seperator from "./Seperator";
export default function ReviewTile({ review }) {
  return (
    <>
      <Card
        paddingX="30px"
        paddingY="10px"
        backgroundColor="brand.200"
        variant="filled"
      >
        <CardBody>
          <Text>{review}</Text>
        </CardBody>
      </Card>
      <Seperator />
    </>
  );
}
