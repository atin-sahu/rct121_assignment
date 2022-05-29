import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <Box
      bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxqKZmKM9bBLBq0p5FXS5vD9V8qSZUQCRLb4ZQMVWXtcF2E1VSf2f7wWj9AjD_Xl4-tw&usqp=CAU"
      border="1px solid black"
      height='400px'
      mb={5}
    >
      <Text fontSize="2xl" textAlign="center">Banner</Text>
      <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing='2'>
        <Link to='/men'>
          <Box border='1px solid black' bg='tomato'>
            <Box>
              <Image src=""></Image>
            </Box>
            <Box><Text>men</Text></Box>
          </Box>
        </Link>
        <Box border='1px solid black' bg='tomato'>
          <Box>
            <Image src=""></Image>
          </Box>
          <Box><Text>women</Text></Box>
        </Box>
        <Box border='1px solid black' bg='tomato'>
          <Box>
            <Image src=""></Image>
          </Box>
          <Box><Text>kid</Text></Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
