import {
  Menu,
  MenuButton,
  useDisclosure,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function HoverMenu({ subcategories, category }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  var mouse = true;
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton
            transition="all 0.5s"
            width="fit"
            _focusVisible={{ border: "none" }}
            // _hover={{ bg: "gray.400" }}
            // _expanded={{ bg: "blue.400" }}
            // _focus={{ bofithadow: "outline" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            borderRadius="full"
            as={Button}
            fontSize="16px"
            colorScheme="brand"
            variant="ghost"
            marginRight="50px"
          >
            {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            {category}
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {subcategories.map((subcategory) => {
              return (
                <MenuItem
                  onClick={() => {
                    router.push("http://localhost:3000/shop?subcat=" + subcategory);
                    onClose;
                  }}
                >
                  {subcategory}
                </MenuItem>
              );
            })}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
