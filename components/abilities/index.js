import { Box, Container, Flex, Text } from "@chakra-ui/layout";
// styles
import { brandColor } from "../../theme/constants";
export default function Abilities() {
  const { BRAND_500, BRAND_800 } = brandColor;

  return (
    <Container maxW={"7xl"} mt={60}>
      <Text fontSize="6xl" color={BRAND_500}>
        Mis habiliades 🐱‍🏍
      </Text>
      <Flex py={["10, 10, 20"]} direction="row">
        <Box
          mt="1"
          border="2px"
          borderColor={"yellow.500"}
          borderRadius="md"
          p={5}
          m={5}
        >
          JavaScript
        </Box>
        <Box
          mt="1"
          border="2px"
          borderColor={"yellow.500"}
          borderRadius="md"
          p={5}
          m={5}
        >
          HTML
        </Box>
        <Box
          mt="1"
          border="2px"
          borderColor={"yellow.500"}
          borderRadius="md"
          p={5}
          m={5}
        >
          CSS
        </Box>
        <Box
          mt="1"
          border="2px"
          borderColor={"yellow.500"}
          borderRadius="md"
          p={5}
          m={5}
        >
          React
        </Box>
        <Box
          mt="1"
          border="2px"
          borderColor={"yellow.500"}
          borderRadius="md"
          p={5}
          m={5}
        >
          Angular
        </Box>
        <Box
          mt="1"
          border="2px"
          borderColor={"yellow.500"}
          borderRadius="md"
          p={5}
          m={5}
        >
          npm
        </Box>
        <Box
          mt="1"
          border="2px"
          borderColor={"yellow.500"}
          borderRadius="md"
          p={5}
          m={5}
        >
          Docker
        </Box>
      </Flex>
    </Container>
  );
}
