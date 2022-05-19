import React from "react";
import {
  Box,
  Center,
  Heading,
  Image,
  Container,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";

export default function Snippets() {
  return (
    <Box width={"100%"} bgImage={`/images/snippet-back2.svg`} py={15} my={15}>
      <Container maxW="container.xl" py={5} centerContent>
        <Heading
          mb={5}
          fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
          color={"brand.500"}
        >
          Me gusta ayudar a las personas a desarrollar software de calidad
        </Heading>
        <Text color={"yellow.500"} fontSize="2xl" mb={10}>
          Revisa estos Hooks de React que te ayudar a mejorar tus proyectos
        </Text>

        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Image
            src="/images/useNearScreen.png"
            alt="useNearScreen Hook"
            objectFit="cover"
            borderRadius="xl"
          />
          <Box
            bgColor={"#051C2C"}
            width={200}
            padding={5}
            borderRadius={20}
            marginLeft={10}
            marginTop={{ base: 2, md: 0 }}
          >
            <Text color={"brand.500"} fontSize="lg">
              useNearScreen
            </Text>
            <Text color={"gray.500"}>
              Te permite saber si un elemento está cerca de la pantalla. Es útil
              para animaciones de entrada y salida de elementos, implementar
              infinite scroll, lazy loading y mucho más.
            </Text>
          </Box>
        </Flex>

        {/* <Flex
          direction={{ base: "colum", md: "row" }}
          alignItems="center"
          marginTop={10}
        >
          <Box
            bgColor={"#051C2C"}
            width={200}
            padding={5}
            borderRadius={20}
            // height={300}
            marginRight={10}
          >
            <Text color={"brand.500"} fontSize="lg">
              useLocalStorage
            </Text>
            <Text color={"gray.500"}>
              Te permite leer y escribir en el local storage.{" "}
            </Text>
          </Box>
          <Image
            src="/images/useNearScreen.png"
            alt="useNearScreen Hook"
            objectFit="cover"
            borderRadius="xl"
          />
        </Flex> */}

        {/* <Divider my={10} /> */}
      </Container>
    </Box>
  );
}
