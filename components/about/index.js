import {
  Container,
  Flex,
  SimpleGrid as Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Box,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";

import Technologies from "./Technologies";

export default function AboutMe() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Box>
      <HStack
        w="full"
        h="full"
        my={{ base: 10, md: 28 }}
        p={{ base: 0, md: 10 }}
        spacing={10}
        alignItems="flex-start"
      >
        <Grid columns={2} columnGap={3} w="full">
          <GridItem colSpan={colSpan}>
            <Text id="aboutMe" fontSize="3xl" color={"gray.400"}>
              Hola 👋, mi nombre es
            </Text>
            <Text fontSize="6xl" color={"brand.500"}>
              Lucas
            </Text>
            <Text fontSize="6xl" color={"brand.500"}>
              Angelino
            </Text>
            <Text fontSize="5xl" color={"yellow.500"}>
              Desarrollador Full Stack 👾
            </Text>
            <Text fontSize="3xl" color={"gray.400"}>
              Me gusta ayudar a las personas a mejorar el mundo mediante
              software de calidad.
            </Text>
          </GridItem>
          <GridItem colSpan={colSpan}>
            {/* <AspectRatio maxW="500px" ratio={3 / 4}> */}
            <Image
              src="/images/me.jpeg"
              alt="naruto"
              objectFit="cover"
              borderRadius={10}
            />
            {/* </AspectRatio> */}
          </GridItem>
        </Grid>
      </HStack>
      {/* <Technologies /> */}
    </Box>
  );
}
