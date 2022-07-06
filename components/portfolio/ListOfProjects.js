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
    tags: ["React", "NodeJS", "Express", "MongoDB", "ChakraUI"],
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
    tags: ["React", "NodeJS", "Express", "MongoDB", "ChakraUI"],
    rtl: false,
  },
];

export default function ListOfProjects() {
  return (
    <>
      <Divider marginBottom={5} />

      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      {/* <Project /> */}
      <Divider marginBottom={{ base: 2, sm: 20 }} />
    </>
  );
}
