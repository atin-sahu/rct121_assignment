import {
    Box,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Text,
    VStack,
  } from "@chakra-ui/react";

export const Part1 = () => {
  return (
    <Box
      border="1px solid black"
      padding="5"
      height="100vh"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.lg">
        <Flex gap={5}>
          <Box flex="2">
            <Center>
              <Text>Desktop Layout</Text>
            </Center>
            <Flex height={400}>
              <Box
                flex="1"
                bg="blue"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>Nav</Text>
              </Box>
              <Box
                flex="2"
                bg="yellow"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Center>
                  <Text>Content</Text>
                </Center>
              </Box>
              <Box
                flex="1"
                bg="red"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Center>
                  <Text>Widget</Text>
                </Center>
              </Box>
            </Flex>
          </Box>
          <Box flex="1">
            <Center>
              <Text>Mobile Layout</Text>
            </Center>
            <Flex flexDirection="column" height={400}>
              <Box
                flex="1"
                bg="blue"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>Nav</Text>
              </Box>
              <Box
                flex="2"
                bg="yellow"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>Content</Text>
              </Box>
              <Box
                flex="1"
                bg="red"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>Widget</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
