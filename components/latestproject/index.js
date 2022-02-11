import {
  Box,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";

// styles
import { brandColor } from "../../theme/constants";

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
];

export default function LatestProject({
  title,
  subtitle,
  image,
  description,
  githubUrl,
}) {
  const { BRAND_500, BRAND_700, BRAND_800 } = brandColor;
  return (
    <Stack direction={{ base: "column", md: "row" }} py={{ base: 10, md: 28 }}>
      <Box w={{ base: "100%", md: "50%" }} p={{ base: "0", md: "5" }}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          direction={"column"}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {title} <br />
            <Text as={"span"} color={"green.400"}>
              {subtitle}
            </Text>
          </Heading>
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            colorScheme={"red"}
            bg={BRAND_500}
            _hover={{ bg: BRAND_700 }}
            _active={{ bg: BRAND_800 }}
            href={githubUrl}
            isExternal={true}
          >
            <Link href={githubUrl} isExternal>
              Github
            </Link>
          </Button>
          <Text color={"gray.500"}>{description}</Text>
        </Stack>
      </Box>

      <Box w={{ base: "100%", md: "50%" }} p={{ base: "0", md: "5" }}>
        <Flex
          boxShadow={"lg"}
          maxW={"640px"}
          direction={{ base: "column-reverse", md: "row" }}
          width={"full"}
          rounded={"xl"}
          p={{ base: "0", md: "8" }}
          justifyContent={"space-between"}
          position={"relative"}
          bg={useColorModeValue("white", "gray.800")}
          _after={{
            content: '""',
            position: "absolute",
            height: "21px",
            width: "29px",
            left: "35px",
            top: "-10px",
            backgroundSize: "cover",
          }}
          _before={{
            content: '""',
            position: "absolute",
            zIndex: "-1",
            height: "full",
            maxW: "640px",
            width: "full",
            filter: "blur(40px)",
            transform: "scale(0.98)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            top: 0,
            left: 0,
            backgroundImage: backgrounds[0],
          }}
        >
          <Box w={"100%"} align={"center"}>
            <Image
              objectFit="cover"
              src={`/images/${image}`}
              alt={`${title}`}
              rounded={"xl"}
            />
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
}
