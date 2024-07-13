import {Box,Text,Flex,Container} from '@chakra-ui/react'
import { useCheckbox } from '@chakra-ui/react'

export default function CustomCheckbox(props) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props)

    return (
      <Container
        display='flex'
        flexDirection='row'
        gridColumnGap={2}
        maxW='40'
        px={3}
        py={1}
        cursor='pointer'
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex
          border='2px solid'
          borderColor='brand.600'
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && <Box w={2} h={2} bg='brand.600' />}
        </Flex>
        <Text color='brand.600' {...getLabelProps()}>
          {props.value}
        </Text>
      </Container>
    )
  }