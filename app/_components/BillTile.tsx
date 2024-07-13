import { Heading, List, ListItem, Text, Flex, Spacer, Input, Button, ButtonGroup, Center } from "@chakra-ui/react";
import Seperator from "./Seperator";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function BillTile() {
  return (
    <div className="bg-mainbg border-text border-solid border p-6 w-2/6">
      <Heading fontSize="28px" paddingX="10px" size="md">
        Order Summary
      </Heading>
      <List padding="10px" spacing={3}>
        <ListItem>
          <Flex width="full">
            <Text fontSize="25px">Subtotal</Text>
            <Spacer />
            <Heading fontSize="27px" size="md" as="b">
            ₹450
            </Heading>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex width="full">
            <Text fontSize="25px">Discount</Text>
            <Spacer />
            <Heading fontSize="27px" size="md" as="b">
            ₹50
            </Heading>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex width="full">
            <Text fontSize="25px">Shipping</Text>
            <Spacer />
            <Heading fontSize="27px" size="md" as="b">
            ₹15
            </Heading>
          </Flex>
        </ListItem>
        <Seperator />
        <ListItem>
          <Flex width="full">
            <Text fontSize="25px" as="b">
              Total
            </Text>
            <Spacer />
            <Heading fontSize="27px" size="md" as="b">
              Rs 555
            </Heading>
          </Flex>
        </ListItem>
      </List>
      <Seperator />
      <ButtonGroup padding='20px' size="sm" variant="outline">
        <Input borderColor='brand.600' variant='outline' backgroundColor='white' placeholder="Apply Promo. Code"/>
        <Button colorScheme='brand' variant='outline' size='md' width='200px'>Apply</Button>
      </ButtonGroup>
      <Seperator/>
      <Center padding='20px'>
      <Button colorScheme='brand' variant='solid' size='md' width='400px'>Go To Checkout <ArrowForwardIcon/></Button>
      </Center>
      
    </div>
  );
}
