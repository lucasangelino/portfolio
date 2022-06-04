import React from "react";
import {
  Flex,
  HStack,
  Box,
  Button,
  Heading,
  Center,
  Link,
  Hide,
} from "@chakra-ui/react";
import Image from "next/image";

export default function BlogBanner() {
  return (
    <Flex
      width={"100%"}
      bgColor="#0092E5"
      paddingY={2}
      paddingX={{ base: 2, md: 40 }}
      borderRadius={10}
      justify="space-between"
      marginY={5}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        marginY="auto"
      >
        <Heading>Visita mi blog y descucbrí muchos</Heading>
        <Heading>articulos de diferentes </Heading>
        <Heading>tecnologia. </Heading>
        <Box marginTop={5}>
          <Link href="https://lucasangelino.github.com" isExternal>
            <Button variant="outline" colorScheme="gray">
              Ir al blog
            </Button>
          </Link>
        </Box>
      </Box>
      <Hide below="sm">
        <Box height={"257px"} width={"260px"} position={"relative"}>
          <Image src="/images/helmet.webp" layout="fill" alt="image" />
        </Box>
      </Hide>
    </Flex>
  );
}
