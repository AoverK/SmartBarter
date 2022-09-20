import { Icon } from '@chakra-ui/icons'
import {
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiLogIn,
  FiPhone,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiSmartphone,
  FiUsers,
} from 'react-icons/fi'
import { FaFlagCheckered } from 'react-icons/fa'
import { BsShop } from 'react-icons/bs'
import { Logo } from './Logo'
import { NavButton } from './NavButton'
import { UserProfile } from './UserProfile'

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="muted" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Stack spacing="1">
            <NavButton label="Home" icon={FiHome} aria-current="page" />
            <NavButton label="Become a Seller" icon={ BsShop } />
            {/* <NavButton label="Get the App" icon={FiSmartphone} /> */}
            <NavButton label="Sign In" icon={FiLogIn} />
            <NavButton label="Join" icon={FaFlagCheckered} />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
)
