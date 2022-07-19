import Head from "next/head";
// libs
import { Container, Flex } from "@chakra-ui/layout";
import { Alert, AlertIcon, Heading } from "@chakra-ui/react";

// components
import Navbar from "../components/navbar";
import AboutMe from "../components/about";
import Portfolio from "../components/portfolio";
import Abilities from "../components/abilities";
import Freelance from "../components/freelance";
import Snippets from "../components/snippets";
import MantainanceBanner from "../components/banners/MantainanceBanner";
import BlogBanner from "../components/banners/BlogBanner";
import ListOfProjects from "../components/portfolio/ListOfProjects";
import { Slider } from "../components/slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Angelino 🐱‍🏍 - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* <MantainanceBanner /> */}
      <Navbar />
      <Container maxW={"container.xl"} py={5}>
        <Flex py={{ base: 0, md: 5 }} direction={"column"}>
          <AboutMe />
          <Heading as={"h2"} size={"2xl"}>
            Destacados
          </Heading>
          <Slider />
          <ListOfProjects />
          <BlogBanner />
        </Flex>
      </Container>
      <Snippets />
      <Abilities />
      <Freelance />
    </>
  );
}
