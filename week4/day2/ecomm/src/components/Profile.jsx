import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Button,
    Avatar
  } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../redux/auth/action';

export const Profile = () => {
  const dispatch = useDispatch();

const handleLogout = ()=>{
  dispatch(signOut(false))
}

  return (
    <Flex>
        <Menu>
            <MenuButton as={Button} variant="link" rounded='full' cursor="pointer" minW={0}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            </MenuButton>
            <MenuList zIndex={10}>
                <MenuItem>Cart</MenuItem>
                <MenuItem>Order</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
  )
}
