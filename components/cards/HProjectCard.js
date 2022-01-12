import * as React from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Link,
  Heading,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

// styles
import { brandColor } from "../../theme/constants";

const gradientColors = [
  {
    startColor: "#EF6B00",
    endColor: "#FFA000",
  },
  {
    startColor: "#ff4b2b",
    endColor: "#ff416c",
  },
  {
    startColor: "#2F80ED",
    endColor: "#56CCF2",
  },
  {
    startColor: "#7b920a",
    endColor: "#add100",
  },
];

export function HighProjectCard({ project }) {
  const { BRAND_500, BRAND_800 } = brandColor;

  const { name, description, githubUrl } = project;

  return (
<Stack h={'250px'} direction={{ base: 'column', md: 'row' }} my={'20px'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        {/* Text part */}
        <Stack 
          spacing={6} 
          w={'full'} 
          maxW={'lg'} 
          bgGradient={`linear(to right, ${
          gradientColors[0]["startColor"] || "#EF6B00"
          }, ${gradientColors[0]["endColor"] || "#FFA000"})`}
          p={2}
          borderRightRadius={'3xl'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. Its
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>

      {/* Img part */}
      <Flex 
        flex={1} 
        justify={'center'}
      >
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
