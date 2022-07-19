import { Box, Img, Flex, Heading, Text, Center } from "@chakra-ui/react";
import React from "react";

export function Slider() {
  return (
    <>
      <Box
        paddingX={5}
        paddingY={20}
        display={"flex"}
        gridGap={"1rem"}
        overflowY={"auto"}
        overscrollBehaviorX={"contain"}
        // scrollSnapType={"x mandatory"}
        css={{
          "&::-webkit-scrollbar": {
            display: { base: "none", sm: "block" },
            height: "4px",
          },
          "&::-webkit-scrollbar-track": {
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#8d8d8d",
            borderRadius: "25px",
          },
        }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          minWidth={{ base: "100%", md: "800px" }}
          borderRadius={"10px"}
          minHeight={{ base: "100%", md: "500px" }}
        >
          <Img
            width={{ base: "100%", md: "40%" }}
            height={{ base: "100%", md: "100%" }}
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={{ base: "10px", md: "0px" }}
            borderBottomLeftRadius={{ base: "0px", md: "10px" }}
            borderBottomRightRadius={{ base: "0px", md: "0px" }}
            src={`/images/project1_image.jpg`}
            objectFit={"cover"}
          />
          <Center
            width={{ base: "100%", md: "60%" }}
            backgroundColor={"#FC3503"}
            borderTopLeftRadius={{ base: "0px", md: "0px" }}
            borderTopRightRadius={{ base: "0px", md: "10px" }}
            borderBottomLeftRadius={{ base: "10px", md: "0px" }}
            borderBottomRightRadius={{ base: "10px", md: "10px" }}
            padding={{ base: "3rem", md: "5rem" }}
            color={"white"}
          >
            <Box>
              <Heading as={"h3"} size={"3xl"} marginY={7}>
                Chatbox
              </Heading>
              <Heading as={"h4"} size={"md"} marginY={5}>
                Aplicación de chat para mantenerte en contacto con tus amigos
              </Heading>
              <Text>See repo</Text>
            </Box>
          </Center>
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          minWidth={{ base: "100%", md: "800px" }}
          borderRadius={"10px"}
          minHeight={{ base: "100%", md: "500px" }}
        >
          <Img
            width={{ base: "100%", md: "40%" }}
            height={{ base: "100%", md: "100%" }}
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={{ base: "10px", md: "0px" }}
            borderBottomLeftRadius={{ base: "0px", md: "10px" }}
            borderBottomRightRadius={{ base: "0px", md: "0px" }}
            src={`/images/project2_image.jpg`}
            objectFit={"cover"}
          />
          <Center
            width={{ base: "100%", md: "60%" }}
            backgroundColor={"#9803FC"}
            borderTopLeftRadius={{ base: "0px", md: "0px" }}
            borderTopRightRadius={{ base: "0px", md: "10px" }}
            borderBottomLeftRadius={{ base: "10px", md: "0px" }}
            borderBottomRightRadius={{ base: "10px", md: "10px" }}
            padding={{ base: "3rem", md: "5rem" }}
            color={"white"}
          >
            <Box>
              <Heading as={"h3"} size={"3xl"} marginY={7}>
                Giffinder
              </Heading>
              <Heading as={"h4"} size={"md"} marginY={5}>
                Encuentra gifs y comparte con tus amigos
              </Heading>
              <Text>See repo</Text>
            </Box>
          </Center>
        </Flex>
      </Box>
    </>
  );
}
