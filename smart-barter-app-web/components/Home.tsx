import { Box, Container } from '@chakra-ui/react'
//import * as React from 'react'
import { ContentHome } from './ContentHome'
import { NavbarUnauth } from './NavbarUnauth'

export const Home = () => (  
  <Box as="section" height="100vh"  maxW="100%" >
    <NavbarUnauth />
    <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
      <ContentHome />
    </Container>
  </Box>
)
