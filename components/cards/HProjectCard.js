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
        bg={useColorModeValue("white", "gray.800")}
        display={{ lg: "flex" }}
        shadow={{ lg: "lg" }}
        rounded={"lg"}
      >
        {/* Image Section */}
        <Box
          Box
          maxW={{ base: "xl", lg: "5xl" }}
          w={{ lg: "50%" }}
          // height={{ base: "full", lg: "auto" }}
        >
          <Image
            src="https://media4.giphy.com/media/4gVvASsN9OPyxHhspx/giphy.webp"
            // fallbackSrc="https://via.placeholder.com/150"
            alt="project image"
            boxSize="100%"
          />
        </Box>

        {/* Description Section */}
        <Box py={20} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
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
