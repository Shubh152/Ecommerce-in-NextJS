"use client";
import {
  Image,
  Stack,
  Icon,
  HStack,
  Center,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-light py-10 px-10">
      <Flex gap={5}>
        <Stack direction="column" spacing={4} width="30%">
          <Image
            marginBottom="20px"
            src="./habova-footer.png"
            width="350px"
            height="100px"
          />
          <Center>
            <HStack spacing={7}>
              <Icon as={FaInstagram} w={7} h={7} color="brand.500" />
              <Icon as={FaWhatsapp} w={7} h={7} color="brand.500" />
              <Icon as={FaFacebookF} w={7} h={7} color="brand.500" />
              <Icon as={FaLocationDot} w={7} h={7} color="brand.500" />
            </HStack>
          </Center>
        </Stack>
        <Spacer />
        <Stack direction="column" paddingX="20px" spacing={8}>
          <Text as="b" fontSize="20px">
            We offer a wide range of home and living essentials that suit your
            taste and lifestyle. Check out aur trendy designs and must-have
            products
          </Text>
          <Text as="b" fontSize="20px">
            Visit Store:
            <br /> HABOVA GENERAL STORES
            <br /> Behind Deepak Kumar Vinay Kumar Jewellers, Awagarh House, MG
            Road, Agra
          </Text>
        </Stack>
      </Flex>
    </div>
  );
}
