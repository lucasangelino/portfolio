import Head from "next/head";
// libs
import { Container, Flex } from "@chakra-ui/layout";

// components
import Navbar from "../components/navbar";
import AboutMe from "../components/about";
import Portfolio from "../components/portfolio";
import Abilities from "../components/abilities";
import Freelance from "../components/freelance";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Angelino 🐱‍🏍 - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Container maxW="container.xl" py={5}>
        <Flex
          h={{ base: "auto", md: "100vh" }}
          py={{ base: 0, md: 5 }}
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
