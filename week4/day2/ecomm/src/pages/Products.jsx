import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FilterComponent } from "../components/FilterComponent";
import { ProductSimple } from "../components/ProductSimple";
import { fetchData } from "../redux/products/action";
// import { useNavigate } from "react-router-dom";

export const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("products",products);
  const dispatch = useDispatch();

  const isAuth = useSelector((store)=>store.authReducer.auth);
  console.log("isAuth products",isAuth);

  useEffect(() => {
    let params = {
      category: searchParams.getAll("category")
    }
    dispatch(fetchData(params));
  }, [dispatch,searchParams]);

  // const navigate = useNavigate();

  return (
    <Box>
      {/* { !isAuth && navigate("/login") } */}
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box minW={"15rem"}>
          <FilterComponent></FilterComponent>
        </Box>
        <Box>
          <Heading as="h3">Products</Heading>
          <Flex flexWrap='wrap' justifyContent="space-around">
            {products.map((product) => {
              return (
                <ProductSimple
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                ></ProductSimple>
              );
            })}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};



// function ProductSimple({image, title, price}) {
//   return (
//     <Center py={12}>
//       <Box
//         role={"group"}
//         p={6}
//         maxW={"330px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.800")}
//         boxShadow={"2xl"}
//         rounded={"lg"}
//         pos={"relative"}
//         zIndex={1}
//       >
//         <Box
//           rounded={"lg"}
//           mt={-12}
//           pos={"relative"}
//           height={"230px"}
//           _after={{
//             transition: "all .3s ease",
//             content: '""',
//             w: "full",
//             h: "full",
//             pos: "absolute",
//             top: 5,
//             left: 0,
//             backgroundImage: `url(${image})`,
//             filter: "blur(15px)",
//             zIndex: -1,
//           }}
//           _groupHover={{
//             _after: {
//               filter: "blur(20px)",
//             },
//           }}
//         >
//           <Image
//             rounded={"lg"}
//             height={230}
//             width={282}
//             objectFit={"contain"}
//             src={image}
//           />
//         </Box>
//         <Stack pt={10} align={"center"}>
         
//           <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
//            {title}
//           </Heading>
//           <Stack direction={"row"} align={"center"}>
//             <Text fontWeight={800} fontSize={"xl"}>
//               ${price}
//             </Text>
//             <Text textDecoration={"line-through"} color={"gray.600"}>
//               $199
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }
