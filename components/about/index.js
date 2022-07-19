import {
  Container,
  Flex,
  SimpleGrid as Grid,
  GridItem,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function AboutMe() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <HStack
      w="full"
      h="full"
      mb={{ base: 10, md: 20 }}
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
            Me gusta ayudar a las personas a mejorar el mundo mediante software
            de calidad.
          </Text>
        </GridItem>
        <GridItem colSpan={colSpan}>
          {/* <AspectRatio maxW="500px" ratio={3 / 4}> */}
          <Image src="/images/me.webp" alt="naruto" objectFit="cover" />
          {/* </AspectRatio> */}
        </GridItem>
      </Grid>
    </HStack>
  );
}
