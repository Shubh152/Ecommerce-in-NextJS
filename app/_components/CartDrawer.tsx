"use client";
import {
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import OrderList from "./OrderList";
import { useRecoilValue } from "recoil";
import { openCart } from "../_store/atoms";

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const open = useRecoilValue(openCart);
  if (open) onOpen;
  return (
    <>
      <div className="bg-black h-40">hey there </div>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Your Cart</DrawerHeader>
          <DrawerBody>
            hey there
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
