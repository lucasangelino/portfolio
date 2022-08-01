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
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function BlogBanner() {
  return (
    <Flex
      width={"100%"}
      bgColor="#0092E5"
      paddingY={10}
      paddingX={{ base: 7, md: 40 }}
      borderRadius={10}
      justify="space-between"
      marginY={5}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        marginY="auto"
        color="white"
      >
        <Heading>Visita mi blog y descucbre muchos</Heading>
        <Heading>artículos de tecnologia.</Heading>
        <Box marginTop={5}>
          <Link href="https://blog-five-bay.vercel.app/" isExternal>
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
