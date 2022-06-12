import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkout } from "../components/Checkout";
import { addOrder, deleteProductCArt } from "../redux/products/action";

export const Cart = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(deleteProductCArt(id));
  };

  const CheckoutHandler = ()=>{
    dispatch(addOrder(cart))
  }

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        Cart
      </Heading>
      {cart.length &&
        cart.map((product) => {
          return (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              removeProduct={removeProduct}
            ></CartItem>
          );
        })}
        <Checkout cart={cart} CheckoutHandler={CheckoutHandler}></Checkout>
    </Box>
  );
};

export const CartItem = ({ id, title, price, description, image, removeProduct }) => {
  return (
    <Box
      border="1px solid red"
      rounded="lg"
      width={"fit-content"}
      margin="auto"
      mb={5}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height='auto'
          width="300px"
          padding="0 1rem"
          position={"relative"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "80%",
            h: "80%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
        >
          <Image
            rounded={"lg"}
            height={300}
            width={300}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Box height='auto' width="300px">
          <Stack p={4}>
            <Heading as={"h3"} size="lg">
              {title}
            </Heading>
            <Box overflow={"hidden"} whiteSpace="nowrap">
              <Text>{description}</Text>
            </Box>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {price}
            </Text>
            <Button
              variant={"solid"}
              leftIcon={<DeleteIcon></DeleteIcon>}
              onClick={()=>removeProduct(id)}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
