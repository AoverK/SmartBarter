import { Box, Container } from '@chakra-ui/react'
import { Header } from './Header'
import { ContentHome } from './ContentHome'
import { NavbarUnauth } from './NavbarUnauth'
import { FooterUnauth } from './FooterUnauth'

export const Home = () => (  
  
  <Box as="section" height="100vh"  maxW="100%" >
    <Header />
    <NavbarUnauth />
    <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
      <ContentHome />
    </Container>
    <FooterUnauth/>
  </Box>
)
