import {
  Container,
  Flex,
  SimpleGrid as Grid,
  GridItem,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function AboutMe() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <HStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Grid columns={2} columnGap={3} w="full">
        <GridItem colSpan={colSpan}>
          <Text fontSize="3xl" color={"gray.400"}>
            Hola 👋, mi nombre es
          </Text>
          <Text fontSize="6xl" color={"brand.500"}>
            Lucas
          </Text>
          <Text fontSize="6xl" color={"brand.500"}>
            Angelino
          </Text>
          <Text fontSize="5xl" color={"yellow.500"}>
            Desarrollador Frontend 🐱‍🏍
          </Text>
          <Text fontSize="3xl" color={"gray.400"}>
            Me gusta ayudar a las personas a mejorar el mundo mediante software
            de calidad.
          </Text>
          <Text fontSize="xl" color={"gray.400"} mt={10}>
            Tambien soy un estusiasta de los deportes y del montañismo!
          </Text>
        </GridItem>
        <GridItem colSpan={colSpan}>Foto</GridItem>
      </Grid>
    </HStack>
  );
}
