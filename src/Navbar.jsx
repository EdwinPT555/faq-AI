import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleColorFlag }) => {
    return (
        <Flex align='center' boxShadow='base' p='2' mb='2'>
            <Box p='2'>
                <Link to='/'><Heading size='lg'>Contract Management Support</Heading></Link>
            </Box>
            <Spacer />
            <Box p='2'>
                <Link to='./about'>About</Link>
            </Box>
            <Box p='2'>
                <Link to='./faq'>FAQ</Link>
            </Box>
            <Box>
                <ColorModeSwitcher toggleColorFlag={toggleColorFlag} />
            </Box>
        </Flex>
    )
}

export default Navbar
