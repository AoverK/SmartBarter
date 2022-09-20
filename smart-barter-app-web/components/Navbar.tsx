import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
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
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiHelpCircle, FiBell, FiSettings } from 'react-icons/fi'
  import { Logo } from './Logo'
  import { Sidebar } from './Sidebar'
  import { ToggleButton } from './ToggleButton'
  
  export const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onToggle, onClose } = useDisclosure()
  
    return (
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '3', lg: '4' }} maxW={{ base:"95%", sm: "100%", md: "100%"}}>
          <Flex justify="space-between">
            <HStack spacing="4">
              <Logo />
              {isDesktop && (
                <ButtonGroup variant="ghost" spacing="1">
                  <Button aria-current="page">Dashboard</Button>
                  <Button>News Feed</Button>
                  <Button>Portfolio</Button>
                  <Button>Projects</Button>
                  <Button>Sources</Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost" spacing="1">
                  <IconButton icon={<FiBell fontSize="1.25rem" />} aria-label="Notification" />
                  <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                </ButtonGroup>
                <Avatar boxSize="10" name="" src="" />
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
    )
  }
  