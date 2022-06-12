import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

export const Checkout = ({ cart, CheckoutHandler}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        onClick={onOpen}
      >
        Checkout
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.map((product) => {
              return (
                <Box key={product.id} m='1rem'>
                  <Flex>
                    <Box>
                      <Image
                        src={product.image}
                        objectFit="contain"
                        boxSize={"100px"}
                        border='1px solid red'
                        rounded='lg'
                      ></Image>
                    </Box>
                    <Box ml={'1rem'} maxW='250px'>
                        <Text fontSize='lg' >{product.title}</Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={CheckoutHandler}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
