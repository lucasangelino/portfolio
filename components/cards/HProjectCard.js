import * as React from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
  Link,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

// styles
import { brandColor } from "../../theme/constants";

export function HighProjectCard({ project }) {
  const { BRAND_500, BRAND_800 } = brandColor;

  const { name, description, githubUrl } = project;

  return (
    <Flex w="full" h="full" alignItems="center" justifyContent="center">
      <Box
        // bg={useColorModeValue("white", "gray.800")}
        display={{ lg: "flex" }}
        shadow={{ lg: "lg" }}
        rounded={"lg"}
      >
        {/* Image Section */}
        <Box
          Box
          maxW={{ base: "xl", lg: "5xl" }}
          w={{ lg: "50%" }}
          height={{ base: "full", lg: "auto" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="project image"
          />
        </Box>

        {/* Description Section */}
        {/* backdrop-filter: blur(9px) saturate(127%);
        -webkit-backdrop-filter: blur(9px) saturate(127%);
        background-color: rgba(76, 101, 148, 0.59);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125); 

        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );*/}
        <Box 
          py={20}
          px={6}
          maxW={{ base: "xl", lg: "5xl" }}
          w={{ lg: "50%" }}
          backdropFilter={'blur(5px)'}
          saturate={127}
          bg={'#4C6594cc'}
          borderRadius={'12px'}
          boxShadow={'0 8px 32px 0 rgba(31, 38, 135, 0.37)'}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {name}{" "}
          </Text>
          <Text mt={4} color={useColorModeValue("gray.600", "gray.400")}>
            {description}
          </Text>

          <Stack
            marginTop={{ base: 4, md: 8 }}
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={BRAND_500}
              _hover={{ bg: BRAND_800 }}
            >
              Ver Demo
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              <Link href={githubUrl} isExternal>
                Github
              </Link>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
