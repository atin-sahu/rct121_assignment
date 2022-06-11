import React, { useEffect } from "react";
import { Box, Text, CheckboxGroup, Checkbox, VStack,Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/products/action";

export const FilterComponent = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [categoryValues, setCataegoryValues] = useState(searchParams.getAll("category") || []);

  const categoryHandler = (values) => {
    setCataegoryValues(values);
  };

  useEffect(()=>{
    if(categoryValues){
      setSearchParams({category:categoryValues})
      let params = {
        category:searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }

  },[categoryValues, setSearchParams, dispatch, searchParams])

  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
        <Text fontSize="2xl">Filters</Text>
        <Text fontSize="2xl">Category</Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">Men's clothing</Checkbox>
            <Checkbox value="women's clothing">Women's clothing</Checkbox>
            <Checkbox value="jewelery">Jewelery</Checkbox>
            <Checkbox value="electronics">Electronnics</Checkbox>
            <Checkbox value="bags">Bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{base:"block", md:"none"}} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
