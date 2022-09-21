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
    <Stack spacing={{ base: '5', lg: '6' }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Stack>
    <Card minH="xs" />
  </Stack>
)

const Card = (props: BoxProps) => (
  <Box
    minH="36"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  />
)
