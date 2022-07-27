import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import Project from "../cards/Project";

const projects = [
  {
    title: "BBVA Ticket",
    desc: "Aplicacion que permite la gestion de tickets del banco BBVA. Crea nuevos escritorios de trabajo, abre y cierra tickets",
    githubUrl: "https://github.com/lucasangelino/gifinder",
    imgUrl: "/images/bbva-portfolio.jpg",
    tags: ["React", "NodeJS", "Express", "MongoDB", "Ant Design"],
    rtl: false,
  },
  {
    title: "Chat",
    desc: "Esta aplicacion de Chat te permite enviar mensajes a tus amigos, y recibir mensajes de ellos",
    githubUrl: "https://github.com/lucasangelino/gifinder",
    imgUrl: "/images/chat-login.jpg",
    tags: ["React", "NodeJS", "Express", "MongoDB", "ChakraUI"],
    rtl: true,
  },
  {
    title: "Gifs",
    desc: "La aplicacion definitiva para buscar  y compartir gifs con tus amigos",
    githubUrl: "https://github.com/lucasangelino/gifinder",
    imgUrl: "/images/gif2.png",
    tags: ["React", "ChakraUI"],
    rtl: false,
  },
  {
    title: "Google Stadia",
    desc: "Landing page de Google Stadia. Compra tu pase de batalla y no te quedes afuera",
    githubUrl: "https://github.com/lucasangelino/gaming",
    imgUrl: "/images/stadia.png",
    tags: ["React", "Vite", "Css"],
    rtl: false,
  },
];

export default function ListOfProjects() {
  return (
    <>
      <Grid
        gap={5}
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
        marginY={5}
      >
        {projects.map((project, index) => (
          <GridItem key={project.title}>
            <Project key={index} {...project} />
          </GridItem>
        ))}
      </Grid>

      {/* <Project /> */}
      <Divider marginBottom={{ base: 2, sm: 20 }} />
    </>
  );
}
