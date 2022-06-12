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

export const Profile = () => {
  return (
    <Flex>
        <Menu>
            <MenuButton as={Button} variant="link" rounded='full' cursor="pointer" minW={0}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            </MenuButton>
            <MenuList>
                <MenuItem>Cart</MenuItem>
                <MenuItem>Order</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
  )
}
