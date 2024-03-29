import React from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Profile } from './Profile';
import { BsCart3 } from 'react-icons/bs';
import { CartCounter } from './CartCounter';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navabar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isAuth = useSelector((state)=>state.authReducer.auth);
  console.log("isAuth navbar",isAuth);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} gap={5}>
            {/* <DesktopNav /> */}
            <Box>
              <Link to="/products">products</Link>
            </Box>

            <Box>
              <Link to="/orders">order</Link>
            </Box>

          </Flex>
        </Flex>

        { isAuth ? (
          <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Link to='/cart'>
              <Box position='relative' p='0.5rem'>
                <CartCounter></CartCounter>
                <Icon as={BsCart3} boxSize='2rem'></Icon>
              </Box>
            </Link>
            <Profile></Profile>
          </Stack>
        ) : (
          <Box>
            <Link to="/login">login</Link>
          </Box>
        )}

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
  );
}

