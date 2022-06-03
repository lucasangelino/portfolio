import React from "react";
import {
  Box,
  Container,
  Text,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
  Button,
  Tag,
  TagLabel,
  HStack,
  Link,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Img,
  useColorModeValue,
} from "@chakra-ui/react";

import Image from "next/image";
import Github from "../icons/Github";

export function Project() {
  const iconBg = useColorModeValue("black", "white");

  return (
    <>
      <Box bgColor={"#715DF2"} borderRadius={15} my={10}>
        <Grid
          templateColumns={{
            base: `repeat(1, 1fr)`,
            sm: `repeat(1, 1fr)`,
            lg: `repeat(9, 1fr)`,
          }}
          gap={{ base: 1, md: 4 }}
        >
          <GridItem
            colSpan={{ base: 1, lg: 4 }}
            py={{ base: 5, md: 20 }}
            px={10}
          >
            <VStack align={"left"} spacing={{ base: "10px", md: "40px" }}>
              <Heading
                color={"white"}
                mb={{ base: 0, md: 5 }}
                size={{ base: "2xl", md: "3xl" }}
              >
                Tickets de BBVA
              </Heading>
              <Text color={"white"} fontSize={{ base: "2xl", md: "3xl" }}>
                {" "}
                Esta aplicacion fue creada para administrar turnos de BBVA. Los
                clientes pueden tomar turnos, los empleados pueden ver los
                turnos que tienen asignados y administrarlos.
              </Text>
              <Text fontSize={"20px"} color={"white"} decoration="underline">
                Demo
              </Text>
              <HStack spacing={1}>
                <Wrap>
                  {["React", "Socket.io", "Css", "Html", "Chakra ui"].map(
                    (size, index) => (
                      <WrapItem key={index}>
                        <Tag
                          size={"lg"}
                          key={index}
                          borderRadius="full"
                          variant="outline"
                          colorScheme="blackAlpha"
                        >
                          <TagLabel>{size}</TagLabel>
                        </Tag>
                      </WrapItem>
                    )
                  )}
                </Wrap>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, lg: 5 }}
            bg="#715DF2"
            py={{ base: 5, md: 30 }}
            px={2}
            borderRadius={15}
          >
            <Center w="100%">
              <Box
                w="100%"
                h={{ base: "250px", md: "450px", lg: "700px" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                position={"relative"}
                // bgColor="#e3e3e3"
              >
                <Box
                  w={{ base: "100%", md: "100%", lg: "850px" }}
                  position={"absolute"}
                  height={{ base: "230px", md: "460px", lg: "550px" }}
                  left={{ base: "0", md: "0", lg: "50" }}
                  // bgColor="#a3a3a3"
                >
                  <Image
                    src="/images/ticket-with.notebook.png"
                    layout="fill"
                    alt="image"
                  />
                </Box>
              </Box>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
