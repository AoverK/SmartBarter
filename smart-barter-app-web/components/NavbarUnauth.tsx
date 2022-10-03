import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Center,
    Container,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
    VisuallyHidden,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiHelpCircle, FiBell, FiSettings } from 'react-icons/fi'
  import { MdMenu } from 'react-icons/md'
  import * as Logos from './Logo'
  import { Sidebar } from './Sidebar'
  import { ToggleButton } from './ToggleButton'
  import { SearchInput } from './SearchInput'
  
  export const NavbarUnauth = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onToggle, onClose } = useDisclosure()
  
    return (
      <>
      

      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '3', lg: '4' }} maxW={{ base:"95%", sm: "100%", md: "100%"}}>
          <Flex justify="space-between">
            <HStack>
              <Logos.ColorLogo />
            </HStack>
            <Box width="full" mx="8" display={{ base: 'none', md: 'flex', sm: 'none' }}>
              <SearchInput />
            </Box>

            {isDesktop ? (
              <HStack spacing="4">
                <Button variant="ghost">Become a Seller</Button>
                {/* <Button variant="ghost">Get the App</Button> */}
                <Button variant="outline">Sign In</Button>
                <Button variant="primary">Join</Button>
              </HStack>
            ) : (
              <>
                <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
                <Drawer
                  isOpen={isOpen}
                  placement="left"
                  onClose={onClose}
                  isFullHeight
                  preserveScrollBarGap
                  // Only disabled for showcase
                  trapFocus={false}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <Sidebar />
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Flex>
        </Container>
      </Box>
      </>
    )
  }
  