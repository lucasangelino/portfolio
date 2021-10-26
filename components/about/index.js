import { Container, Flex } from "@chakra-ui/layout";

export default function AboutMe() {
  return (
    <Container maxW="container.xl" p={10}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      ></Flex>
    </Container>
  );
}
