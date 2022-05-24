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

  const laptopImageHeigh = useBreakpointValue({
    base: "200px",
    md: "500px",
  });

  const laptopImageWidth = useBreakpointValue({
    base: "270px",
    md: "900px",
  });

  const mobileImageHeigh = useBreakpointValue({
    base: "370px",
    md: "600px",
  });

  const mobileImageWidth = useBreakpointValue({
    base: "225px",
    md: "350px",
  });

  return (
    <>
      {/* primera */}
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
            // bgColor={"#715DA8"}
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

            {/* <Box
              // marginLeft={{ base: 2, md: 10 }}
              marginTop={{ base: 0, md: "50" }}
              display={{ base: "flex", md: "block" }}
              justifyContent="center"
              width={{ base: "100%", md: "100%" }}
              height={{ base: "20px", md: "63%" }}
              position="relative"
              // bgColor={"whiteAlpha.400"}
            >
              <Image
                src="/images/ticket-with.notebook.png"
                // height={laptopImageHeigh || "200px"}
                // width={laptopImageWidth || "270px"}
                layout="fill"
                alt="image"
              />
            </Box> */}
          </GridItem>
        </Grid>
      </Box>

      {/* segunda */}
      {/* <Box bgColor={"#DA1558"} borderRadius={15} my={12}>
        <Grid
          templateColumns={{ base: `repeat(1, 1fr)`, md: `repeat(9, 1fr)` }}
          gap={{ base: 1, md: 4 }}
        >
          <GridItem
            colSpan={{ base: 1, md: 4 }}
            bg="#DA1558"
            py={30}
            paddingLeft={{ base: 7, md: 100 }}
            marginRight={{ base: 10, md: 20 }}
            borderRadius={15}
          >
            <Box marginLeft={{ base: 7, md: 10 }}>
              <Image
                src="/images/gifinder-mobile.jpg"
                height={mobileImageHeigh || "370px"}
                width={mobileImageWidth || "225px"}
                layout="fixed"
                alt="image"
              />
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 4 }}
            py={{ base: 2, md: 20 }}
            px={10}
          >
            <VStack align={"right"} spacing={{ base: "10px", md: "40px" }}>
              <Heading color={"white"} mb={5} size={{ base: "2xl", md: "3xl" }}>
                Gifs
              </Heading>
              <Text color={"white"} fontSize={{ base: "2xl", md: "3xl" }}>
                {" "}
                Esta aplicacion permite buscar Gifs animados en la web. Puedes
                copiarlos y compartirlos por whatsapp o cualquier otra red
                social.
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
        </Grid>
      </Box> */}

      {/* tercera */}
      {/* <Box bgColor={"#051C2C"} borderRadius={15} my={12}>
        <Grid
          templateColumns={{ base: `repeat(1, 1fr)`, md: `repeat(9, 1fr)` }}
          gap={4}
        >
          <GridItem
            colSpan={{ base: 1, md: 4 }}
            py={{ base: 5, md: 20 }}
            px={10}
          >
            <VStack align={"left"} spacing={{ base: "10px", md: "40px" }}>
              <Heading color={"white"} mb={5} size={{ base: "2xl", md: "3xl" }}>
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
                          colorScheme="whiteAlpha"
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
            colSpan={{ base: 1, md: 5 }}
            bg="#051C2C"
            marginLeft={4}
            borderRadius={15}
          >
            <Box
              marginTop={{ base: 2, md: 20 }}
              marginLeft={{ base: 0, md: 10 }}
            >
              <Image
                src="/images/maps.png"
                height={laptopImageHeigh || "200px"}
                width={laptopImageWidth || "270px"}
                layout="fixed"
                alt="image"
                style={{ borderRadius: 20 }}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box> */}

      {/* <Box my={12}>
        <VStack>
          <Github height={50} fill={iconBg} />
          <Text color="white" fontSize={"lg"}>
            Mas aquí
          </Text>
        </VStack>
      </Box> */}
    </>
  );
}
