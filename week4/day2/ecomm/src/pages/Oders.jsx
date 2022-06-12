import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSimple } from "../components/ProductSimple";
import { fetchOrder } from "../redux/products/action";

const Oders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.ecommerceData.orders);
console.log("orders",orders);

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        Your Order
      </Heading>
      <Box>
        {orders.map((product) => (
          <ProductSimple
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          ></ProductSimple>
        ))}
      </Box>
    </Box>
  );
};

export default Oders;
