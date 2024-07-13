import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Image,
  Center,
  Box,
  HStack,
} from "@chakra-ui/react";

export default function ZoomModal({ currPhoto }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image cursor='zoom-in' onClick={onOpen} width="600px" height="330px" src={currPhoto} />

      <Modal isOpen={isOpen} size="full" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton fontSize="xl" />
          <Center>
            <ModalBody alignContent="center" justifyContent="center">
              <HStack>
                <Box alignItems="center" onClick={() => {}} fontSize="48px">
                  <ChevronLeftIcon />
                </Box>
                <Image
                  width="1000px"
                  height="700px"
                  src={currPhoto}
                  marginX="auto"
                />
              </HStack>
            </ModalBody>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
