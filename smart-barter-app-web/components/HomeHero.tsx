import {
    Box,
    Button,
    Center,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    useBreakpointValue,
    useColorModeValue as mode,
  } from "@chakra-ui/react";
  
import * as Logos from './Brands'
  
  export const HomeHero = () => {
    return (
      <Container maxW="container.lg">
        <Center p={4} minHeight="30vh">
          <VStack>
            <Container maxW="container.md" textAlign="center">
              <Heading size={useBreakpointValue({ base: 'md', md: 'xl', lg: '2xl' })} mb={4} color="gray.700">
              Buy, sell or trade. Almost anything.
              </Heading>
  
              <Text fontSize={useBreakpointValue({ base: 'md', md: 'md', lg: 'xl' })} color="gray.500">
              SmartBarter brings together global buyers, sellers and traders to make is easier to exchange real world good and services 24/7. We leverage traditional payments and crypto to benefit from fast transactions and cross border transactions
              </Text>
  
              <Button
                mt={8}
                colorScheme="brand"
                onClick={() => {
                  window.open("", "_blank");
                }}
              >
                I need this →
              </Button>
  
              <Text my={2} fontSize="sm" color="gray.500">
                No credit card or crypto wallet required
              </Text>
            </Container>
          </VStack>
        </Center>
        <Box minHeight="100px">
          <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
            Proudly built with brands you know.
          </Text>
          <SimpleGrid
            mt="8"
            columns={{ base: 1, sm: 2, md: 3, lg: 6 }}
            color="gray.500"
            alignItems="center"
            spacing={{ base: '12', lg: '24' }}
            fontSize="2xl"
          >
            <Center>
              <Box width={useBreakpointValue({ base: '40', lg: 'md' })}>
                <Logos.Polkadot/>
              </Box>
            </Center>
            <Center>
              <Box width={useBreakpointValue({ base: '40', lg: 'md' })}>
                <Logos.Moonbeam />
              </Box>
            </Center>
            <Center>
              <Box width={useBreakpointValue({ base: '40', lg: 'md' })}>
                <Logos.Stripe />
              </Box>
            </Center>
            <Center>
              <Box width={useBreakpointValue({ base: '40', lg: 'md' })}>
                <Logos.NextJS />
              </Box>
            </Center>
            <Center>
              <Box width={useBreakpointValue({ base: '40', lg: 'md' })}>
                <Logos.Figma />
              </Box>
            </Center>
            <Center>
              <Box width={useBreakpointValue({ base: '40', lg: 'md' })}>
              <Logos.Notion />
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
      </Container>
    );
  };