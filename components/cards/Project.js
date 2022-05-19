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
} from "@chakra-ui/react";
import Image from "next/image";

export function Project() {
  const imageHeigh = useBreakpointValue({
    base: "200px",
    md: "500px",
  });

  const imageWidth = useBreakpointValue({
    base: "270px",
    md: "900px",
  });

  return (
    <>
      <Box bgColor={"#715DF2"} borderRadius={15} my={10}>
        <Grid
          templateColumns={{ base: `repeat(1, 1fr)`, md: `repeat(9, 1fr)` }}
          gap={{ base: 1, md: 4 }}
        >
          <GridItem
            colSpan={{ base: 1, md: 4 }}
            py={{ base: 5, md: 20 }}
            px={10}
          >
            <VStack align={"left"} spacing={{ base: "10px", md: "40px" }}>
              <Heading
                color={"white"}
                mb={{ base: 0, md: 5 }}
                size={{ base: "2xl", md: "3xl" }}
                as={"h1"}
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
            colSpan={{ base: 1, md: 4 }}
            bg="#715DF2"
            py={{ base: 5, md: 30 }}
            borderRadius={15}
          >
            <Box marginLeft={{ base: 4, md: 10 }}>
              {/* <Center> */}
              <Image
                src="/images/ticket-with.notebook.png"
                height={imageHeigh}
                width={imageWidth}
                layout="fixed"
                alt="image"
              />
              {/* </Center> */}
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* segunda */}
      {/* <Box bgColor={"#DA1558"} borderRadius={15} my={12}>
        <Grid templateColumns="repeat(8, 1fr)" gap={4}>
          <GridItem
            colSpan={4}
            bg="#DA1558"
            py={30}
            paddingLeft={100}
            marginRight={20}
            borderRadius={15}
          >
            <Image
              src="/images/gifinder-mobile.jpg"
              height="600"
              width="350"
              layout="fixed"
              alt="image"
            />
          </GridItem>
          <GridItem colSpan={4} py={20} px={10}>
            <VStack align={"right"} spacing="40px">
              <Heading color={"white"} mb={5} size="3xl" as={"h1"}>
                Gifs
              </Heading>
              <Text color={"white"} fontSize="3xl">
                {" "}
                Esta aplicacion permite buscar Gifs animados en la web. Puedes
                copiarlos y compartirlos por whatsapp o cualquier otra red
                social.
              </Text>
              <Text fontSize={"20px"} color={"white"} decoration="underline">
                Demo
              </Text>
              <HStack spacing={1}>
                {["React", "Giphy", "Css", "Html"].map((size, index) => (
                  <Tag
                    size={"lg"}
                    key={index}
                    borderRadius="full"
                    variant="outline"
                    colorScheme="blackAlpha"
                  >
                    <TagLabel>{size}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Box> */}

      {/* tercera
      <Box bgColor={"#051C2C"} borderRadius={15} my={12}>
        <Grid templateColumns="repeat(9, 1fr)" gap={4}>
          <GridItem colSpan={4} py={20} px={10}>
            <VStack align={"left"} spacing="40px">
              <Heading color={"white"} mb={5} size="3xl" as={"h1"}>
                Tickets de BBVA
              </Heading>
              <Text color={"white"} fontSize="3xl">
                {" "}
                Esta aplicacion fue creada para administrar turnos de BBVA. Los
                clientes pueden tomar turnos, los empleados pueden ver los
                turnos que tienen asignados y administrarlos.
              </Text>
              <Text fontSize={"20px"} color={"white"} decoration="underline">
                Demo
              </Text>
              <HStack spacing={1}>
                {["React", "Socket.io", "Css", "Html", "Chakra ui"].map(
                  (size, index) => (
                    <Tag
                      size={"lg"}
                      key={index}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blackAlpha"
                    >
                      <TagLabel>{size}</TagLabel>
                    </Tag>
                  )
                )}
              </HStack>
            </VStack>
          </GridItem>
          <GridItem colSpan={5} bg="#051C2C" marginLeft={5} borderRadius={15}>
            <Box>
              <Image
                src="/images/maps-pc-no-bg.png"
                height="900"
                width="1000"
                layout="fixed"
                alt="image"
              />
            </Box>
          </GridItem>
        </Grid>
      </Box> */}
    </>
  );
}
