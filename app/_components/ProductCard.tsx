import {
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Stack,
  Image,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import type { Product } from "../utils/interfaces";

export default function ProductCard({
  name,
  id,
  price,
  cover,
}: Product) {
  console.log(name);
  return (
    <div className="border border-text m-1 w-fit h-fit">
      <LinkBox>
        <LinkOverlay href={"/product?id=" + id}>
          <Card minW="xs" backgroundColor="brand.200" variant="filled">
            <CardBody>
              <Image
                height="250px"
                width="400px"
                fit="fill"
                src={cover}
                alt={name}
                borderRadius="sm"
                borderWidth="2px"
                borderStyle="solid"
                borderColor="brand.500"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color="brand.600">
                  {name}
                </Heading>
                <Text as="b" color="brand.600" fontSize="2xl">
                  ₹{price}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="brand">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="brand">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </LinkOverlay>
      </LinkBox>
    </div>
  );
}
