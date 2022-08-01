import {
  Flex,
  Text,
  chakra,
  Box,
  useColorModeValue,
  HStack,
  Link,
  VStack,
  Heading,
  Stack,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";

import Github from "../icons/Github";
import Gmail from "../icons/Gmail";
import Messenger from "../icons/Messenger";
import Linkedin from "../icons/Linkedin";

function OfferCard({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Freelance() {
  return (
    <Box py={12} id={"freelance"}>
      <VStack spacing={2} textAlign="center">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Tambien hago desarrollo freelance
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <OfferCard>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            ></Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Frontend - Backend - Fullstack
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>Landing Page</ListItem>
                <ListItem>e-Commers</ListItem>
                <ListItem>Aplicaciones Web</ListItem>
                <ListItem>Aplicaciones de Escritorio</ListItem>
              </List>

              <HStack
                justifyContent={"center"}
                spacing={{ base: "10px", sm: "20px", lg: "30px" }}
                px={5}
              >
                <Link href="mailto:angelino.n.lucas@gmail.com?subject=Freelance Job">
                  <Gmail width={50} />
                </Link>
                <Link href="https://github.com/lucasangelino" isExternal>
                  <Github width={50} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lucas-nicolas-angelino/"
                  isExternal
                >
                  <Linkedin width={50} />
                </Link>
              </HStack>
            </VStack>
          </Box>
        </OfferCard>
      </Stack>
    </Box>
  );
}
