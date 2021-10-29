// libs
import { Container, Flex, VStack } from "@chakra-ui/layout";

// components
import Navbar from "../components/navbar";
import AboutMe from "../components/about";
import Portfolio from "../components/portfolio";
import Abilities from "../components/abilities";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={5}>
        <Flex
          h={{ base: "auto", md: "100vh" }}
          py={[10, 10, 20]}
          direction={"column"}
        >
          <AboutMe />
          <Portfolio />
          <Abilities />
        </Flex>
      </Container>
    </>
  );
}
