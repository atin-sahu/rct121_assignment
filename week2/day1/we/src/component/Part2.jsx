import { Box, Center, Grid, GridItem, Text, Flex } from "@chakra-ui/react";

export const Part2 = () => {
  return (
    <Box border="1px solid black" display="flex" justifyContent="center">
      <Box flex={2} borderRight="1px solid skyblue" padding="4">
        <Center>
          <Text>Mobile</Text>
        </Center>
        <Box
          display="flex"
          flexDirection="column"
          height={600}
          gap="3"
          alignItems="center"
        >
          <Box height="150px" width="250px" bg="purple"></Box>
          <Box height="150px" width="250px" bg="tomato"></Box>
          <Box height="150px" width="250px" bg="skyblue"></Box>
        </Box>
      </Box>
      <Box flex={4} padding="4">
        <Center>
          <Text>Desktop</Text>
        </Center>
        <Flex gap={5}>
          <Box flex="4">
            <Grid
              h="470px"
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(1, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={2} bg="purple" />
              <GridItem rowSpan={1} bg="skyblue" />
            </Grid>
          </Box>
          <Box flex="2">
            <Grid
              h="470px"
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(1, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={3} bg="tomato" />
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
