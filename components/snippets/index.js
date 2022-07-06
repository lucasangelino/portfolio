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
    <Box bgImage={`/images/snippet-back2.svg`} py={15} my={15}>
      <Container maxW="container.xl" py={5} centerContent>
        <Heading
          mb={10}
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          color={"brand.500"}
        >
          Entusiasta de compartir conocimiento
        </Heading>

        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          alignItems="center"
          marginTop={10}
        >
          <Box width={{ md: "700px" }}>
            <Image
              src="/images/carbon3.png"
              alt="Project Validation Script"
              objectFit="cover"
              borderRadius="xl"
            />
          </Box>
          <Box
            bgColor={"#051C2C"}
            padding={5}
            borderRadius={20}
            marginLeft={10}
            marginTop={{ base: 2, md: 0 }}
          >
            <Text color={"brand.500"} fontSize="lg">
              Project Validation
            </Text>
            <Text color={"yellow.500"} fontSize="sm">
              Script
            </Text>
            <Text color={"gray.500"}>
              Esta script de Javascript te permite verificar versiones de node,
              npm, depencencias y mucho más.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          alignItems="center"
          marginTop={10}
        >
          <Box
            bgColor={"#051C2C"}
            padding={5}
            borderRadius={20}
            marginRight={10}
            marginTop={{ base: 2, md: 0 }}
          >
            <Text color={"brand.500"} fontSize="lg">
              Project Validation
            </Text>
            <Text color={"yellow.500"} fontSize="sm">
              Script
            </Text>
            <Text color={"gray.500"}>
              Esta script de Javascript te permite verificar versiones de node,
              npm, depencencias y mucho más.
            </Text>
          </Box>
          <Box width={{ md: "700px" }}>
            <Image
              src="/images/carbon3.png"
              alt="Project Validation Script"
              objectFit="cover"
              borderRadius="xl"
            />
          </Box>
        </Flex>

        {/* <Divider my={10} /> */}
      </Container>
    </Box>
  );
}
