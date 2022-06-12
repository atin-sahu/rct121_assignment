import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart} from "../redux/products/action"

export const CartCounter = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCart())
  },[dispatch])

  return (
    <Box
      backgroundColor={"black"}
      textColor="white"
      borderRadius={"50%"}
      w="20px"
      h={"20px"}
      textAlign="center"
      pb={"20px"}
      position="absolute"
      right={"0"}
      top="0"
    >
      {cart?.length ? cart.length : 0}
    </Box>
  );
};
