import { HStack, Button, Input } from "@chakra-ui/react";
import { useNumberInput } from "@chakra-ui/react";

export default function Quantity() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 5,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <HStack maxW="320px">
      <Button size='sm' variant="solid" colorScheme="brand" {...dec}>
        -
      </Button>
      <Input
        borderWidth="1px"
        borderColor="brand.600"
        borderRadius="full"
        variant="filled"
        backgroundColor='white'
        width="60px"
        paddingX="10px"
        paddingY="10px"
        alignItems='center'
        {...input}
      />
      <Button size='sm' variant="solid" colorScheme="brand" {...inc}>
        +
      </Button>
    </HStack>
  );
}
