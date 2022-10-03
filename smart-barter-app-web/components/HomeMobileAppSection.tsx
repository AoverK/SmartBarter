import {
    Box,
    Button,
    Center,
    Container,
    Heading,
    Image,
    Text,
    SimpleGrid,
    VStack,
    useBreakpointValue,
    useColorModeValue as mode,
  } from "@chakra-ui/react";
  
import * as Logos from './Brands'
  
  export const HomeMobileAppSection = () => {
    return (
      <Box>
          <Image
            boxShadow='lg'
            src={useBreakpointValue({ base: '/mobileappsection_small_001.png', md: '/mobileappsection_medium_001.png', lg: '/mobileappsection_001.png' })}
            alt='Mobile App'
          />
      </Box>
    );
  };