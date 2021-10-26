// libs
import { Container, Flex, VStack } from "@chakra-ui/layout";

// components
import Navbar from "../components/navbar";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" p={0}>
        <Flex
          h={{ base: "auto", md: "100vh" }}
          py={[0, 10, 20]}
          direction={{ base: "column-reverse", md: "row" }}
        ></Flex>
      </Container>
    </>
  );
}
