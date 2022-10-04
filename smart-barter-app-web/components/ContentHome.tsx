import {
  Box,
  BoxProps,
  Button,
  Center,
  Heading,
  Image,
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
    <Center>
      <Stack spacing="4" bg="#00000" p="5" m="15" w="800px" boxShadow={useColorModeValue('sm', 'sm-dark')} direction={{ base: 'column', lg: 'row' }} justify="space-between" >    
        <Stack spacing="1" >
          <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
            Sell a Product or Service
          </Heading>
          <Text color="muted">Click the <strong>Create A Listing</strong> button to create a listing</Text>
        </Stack>
        <Stack direction="row" spacing="3">        
          <Button variant="primary" leftIcon={<FiPlusCircle fontSize="1.25rem" />}>Create A Listing</Button>
        </Stack>
      </Stack>
    </Center>
    
    <Stack pb={6} spacing={{ base: '5', lg: '6' }}>
      <Stack spacing="1" >
        <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} as='h2' fontSize={useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' })} fontWeight="medium" >
          Products
        </Heading>
        <Text color="muted" fontSize={useBreakpointValue({ base: 'sm', lg: 'md' })}>Recently listed products to buy or barter</Text>
      </Stack>
      <Center>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6">
          <Box
            w="250px"
            h="375px"
            bg="bg-surface"
            boxShadow={useColorModeValue('sm', 'sm-dark')}
            borderRadius="lg"
          >
            <Box>
              <Image
                htmlWidth='250px'
                htmlHeight='210px'
                objectFit='cover'
                src='/framed_print_001.png'
                alt='Framed Print'
              />
            </Box>
            <Box
            >
              <Stack pl="3" pr="3" pt="1" pb="2" direction="row">
                <Stack>
                  <Text
                    minWidth="185px"
                    maxWidth="185px"
                    minHeight="50"
                    maxHeight="50"
                    fontSize={14}
                  
                  >
                    Framed print 8in x 11.5in
                  </Text>
                </Stack>
                <Stack>
                  <Image
                  htmlWidth='25px'
                  htmlHeight='25px'
                  objectFit='cover'
                  src='/heart_001.png'
                  alt='Framed Print'
                  />

                </Stack>
              </Stack>
              <Stack pl="3" pr="3" pb="2" direction="row">
                <Stack>
                  <Text
                    pt="1"
                    minWidth="135px"
                    maxWidth="135px"
                    fontSize={21}
                    fontWeight="medium"
                    color="muted"
                    
                  
                  >
                    $100,000 USD
                  </Text>
                </Stack>
                <Stack>
                <Stack>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    15,442 DOT
                  </Text>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    73.86 ETH
                  </Text>
                </Stack>

                </Stack>
              </Stack>
              <Center >
                <Stack direction="row" justifyContent="space-between">
                  <Button variant="outline" width={100} color="#2B6CB0" borderColor={"#2B6CB0"} borderWidth="2px">Barter</Button>
                  <Button variant="primary" width={100}>Buy Now</Button>
                </Stack>
              </Center>

            </Box>
          </Box>
          <Box
            w="250px"
            h="375px"
            bg="bg-surface"
            boxShadow={useColorModeValue('sm', 'sm-dark')}
            borderRadius="lg"
          >
            <Box>
              <Image
                htmlWidth='250px'
                htmlHeight='210px'
                objectFit='cover'
                src='/moonbird_001.png'
                alt='Framed Print'
              />
            </Box>
            <Box
            >
              <Stack pl="3" pr="3" pt="1" pb="2" direction="row">
                <Stack>
                  <Text
                    minWidth="185px"
                    maxWidth="185px"
                    minHeight="50"
                    maxHeight="50"
                    fontSize={14}
                  >
                    Proof Collective Moonbirds #956 

                  </Text>
                </Stack>
                <Stack>
                  <Image
                  htmlWidth='25px'
                  htmlHeight='25px'
                  objectFit='cover'
                  src='/heart_001.png'
                  alt='Framed Print'
                  />

                </Stack>

              </Stack>
              <Stack pl="3" pr="3" pb="2" direction="row">
                <Stack>
                  <Text
                    pt="1"
                    minWidth="135px"
                    maxWidth="135px"
                    fontSize={21}
                    fontWeight="medium"
                    color="muted"
                    
                  
                  >
                    $13,935 USD
                  </Text>
                </Stack>
                <Stack>
                <Stack>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    2,148.12 DOT
                  </Text>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    10.49 ETH
                  </Text>
                </Stack>

                </Stack>
              </Stack>
              <Center >
                <Stack direction="row" justifyContent="space-between">
                  <Button variant="outline" width={100} color="#2B6CB0" borderColor={"#2B6CB0"} borderWidth="2px">Barter</Button>
                <Button variant="primary" width={100}>Buy Now</Button>
              </Stack>

              
              </Center>

            </Box>
          </Box>
          <Box
            w="250px"
            h="375px"
            bg="bg-surface"
            boxShadow={useColorModeValue('sm', 'sm-dark')}
            borderRadius="lg"
          >
            <Box>
              <Image
                htmlWidth='250px'
                htmlHeight='210px'
                objectFit='cover'
                src='/ai_micro_saas_001.png'
                alt='Framed Print'
              />
            </Box>
            <Box
            >
              <Stack pl="3" pr="3" pt="1" pb="2" direction="row">
                <Stack>
                  <Text
                    minWidth="185px"
                    maxWidth="185px"
                    minHeight="50"
                    maxHeight="50"
                    fontSize={14}
                  >
                    AI-Based Micro SaaS App for Sell $536 MRR

                  </Text>
                </Stack>
                <Stack>
                  <Image
                  htmlWidth='25px'
                  htmlHeight='25px'
                  objectFit='cover'
                  src='/heart_001.png'
                  alt='Framed Print'
                  />

                </Stack>

              </Stack>
              <Stack pl="3" pr="3" pb="2" direction="row">
                <Stack>
                  <Text
                    pt="1"
                    minWidth="135px"
                    maxWidth="135px"
                    fontSize={21}
                    fontWeight="medium"
                    color="muted"
                    
                  
                  >
                    $25,000 USD
                  </Text>
                </Stack>
                <Stack>
                <Stack>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    4,005.58 DOT
                  </Text>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    19.27 ETH
                  </Text>
                </Stack>

                </Stack>
              </Stack>
              <Center >
                <Stack direction="row" justifyContent="space-between">
                  <Button variant="outline" width={100} color="#2B6CB0" borderColor={"#2B6CB0"} borderWidth="2px">Barter</Button>
                <Button variant="primary" width={100}>Buy Now</Button>
              </Stack>

              
              </Center>

            </Box>
          </Box>
          <Box
            w="250px"
            h="375px"
            bg="bg-surface"
            boxShadow={useColorModeValue('sm', 'sm-dark')}
            borderRadius="lg"
          >
            <Box>
              <Image
                htmlWidth='250px'
                htmlHeight='210'
                objectFit='cover'
                src='/used_led_monitor_001.png'
                alt='Framed Print'
              />
            </Box>
            <Box
            >
              <Stack pl="3" pr="3" pt="1" pb="2" direction="row">
                <Stack>
                  <Text
                    minWidth="185px"
                    maxWidth="185px"
                    minHeight="50"
                    maxHeight="50"
                    fontSize={14}
                  >
                    Used LED Monitor 1920x1080 Free Shipping

                  </Text>
                </Stack>
                <Stack>
                  <Image
                  htmlWidth='25px'
                  htmlHeight='25px'
                  objectFit='cover'
                  src='/heart_001.png'
                  alt='Framed Print'
                  />

                </Stack>

              </Stack>
              <Stack pl="3" pr="3" pb="2" direction="row">
                <Stack>
                  <Text
                    pt="1"
                    minWidth="135px"
                    maxWidth="135px"
                    fontSize={21}
                    fontWeight="medium"
                    color="muted"
                    
                  
                  >
                    $700 USD
                  </Text>
                </Stack>
                <Stack>
                <Stack>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    107.94 DOT
                  </Text>
                  <Text
                    color="muted"
                    fontSize={11}
                  
                  >
                    0.52 ETH
                  </Text>
                </Stack>

                </Stack>
              </Stack>
              <Center >
                <Stack direction="row" justifyContent="space-between">
                  <Button variant="outline" width={100} color="#2B6CB0" borderColor={"#2B6CB0"} borderWidth="2px">Barter</Button>
                <Button variant="primary" width={100}>Buy Now</Button>
              </Stack>

              
              </Center>

            </Box>
          </Box>
        </SimpleGrid>
      </Center>
    </Stack>
    {/* <Stack pb={6} spacing={{ base: '5', lg: '6' }}>
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
    </Stack> */}
    <Stack direction="row" spacing="3" textAlign="center" justifyContent="center">
      <Button variant="secondary">View All Products and Services</Button>
    </Stack>
  </Stack>
)

const Card = (props: BoxProps) => (
  <Box
    w="250"
    h="355"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  />
)
