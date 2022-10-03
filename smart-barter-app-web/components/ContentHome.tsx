import {
  Box,
  BoxProps,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiDownloadCloud, FiPlusCircle } from 'react-icons/fi'
import { HomeHero } from './HomeHero'

export const ContentHome = () => (
  
  <Stack spacing={{ base: '8', lg: '6' }}>
    <HomeHero />
    <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between" >
      <Stack spacing="1" >
        <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium" >
          Sell a Product or Service
        </Heading>
        <Text color="muted">Click the <strong>Create A Listing</strong> button to create a listing</Text>
      </Stack>
      <Stack direction="row" spacing="3">        
        <Button variant="primary" leftIcon={<FiPlusCircle fontSize="1.25rem" />}>Create A Listing</Button>
      </Stack>
    </Stack>
    <Stack pb={6} spacing={{ base: '5', lg: '6' }}>
      <Stack spacing="1" >
        <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} as='h2' fontSize={useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' })} fontWeight="medium" >
          Products
        </Heading>
        <Text color="muted" fontSize={useBreakpointValue({ base: 'sm', lg: 'md' })}>Recently listed products to buy or barter</Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6">
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Stack>
    <Stack pb={6} spacing={{ base: '5', lg: '6' }}>
      <Stack spacing="1" >
        <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} as='h2' fontSize={useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' })} fontWeight="medium" >
          Services
        </Heading>
        <Text color="muted" fontSize={useBreakpointValue({ base: 'sm', lg: 'md' })}>Popular services to buy or barter</Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6">
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Stack>
    <Stack direction="row" spacing="3" textAlign="center" justifyContent="center">
      <Button variant="secondary">View All Products and Services</Button>
    </Stack>
  </Stack>
)

const Card = (props: BoxProps) => (
  <Box
    w="280"
    h="380"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  />
)
