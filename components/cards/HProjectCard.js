import * as React from 'react'
import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    IconButton,
    Icon,
    useColorModeValue,
    Divider,
    Link
  } from "@chakra-ui/react";

// styles
import { brandColor } from "../../theme/constants";

export function HighProjectCard({project}) {
    const { BRAND_500, BRAND_800 } = brandColor;

    const {name, description, githubUrl} = project;

    return(
        <Stack
            align={"center"}
            bg={useColorModeValue("#800080", "#800080")}
            rounded={{ lg: "lg" }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 15 }}
            my={{base: 10, md: 15}}
            direction={{ base: "column", md: "row" }}
        >
          <Flex
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
            >
            <Box
                bg={useColorModeValue("white", "gray.800")}
                mx={{ lg: 8 }}
                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                shadow={{ lg: "lg" }}
                rounded={{ lg: "lg" }}
            >
                <Box w={{ lg: "50%" }}>
                <Box
                    h={{ base: 64, lg: "full" }}
                    rounded={{ lg: "lg" }}
                    bgSize="cover"
                    style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                    }}
                ></Box>
                </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {name} {" "}
          </Text>
          <Text mt={4} color={useColorModeValue("gray.600", "gray.400")}>
            {description}
          </Text>

          <Box mt={8}>
            <Link
              
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
            >
              {githubUrl}
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
      </Stack>
    )
}