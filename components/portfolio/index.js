import {
  Box,
  Container,
  Text,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
  Button,
  Tag,
  TagLabel,
  HStack,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { Project } from "../cards/Project";

// styles
import { brandColor } from "../../theme/constants";

const projects = [
  {
    title: "Chat",
    subtitle: "Una aplicación web para chatear",
    description:
      "Esta aplicacion de chat fue creada con React, Socket.io, Chakra UI, Context API y MongoDB",
    image: "chat.PNG",
    githubUrl: "https://github.com/lucasangelino/Ping-Chat",
  },
  {
    title: "BBVA",
    subtitle: "Sistema de Turnos",
    description: `Si alguna vez fuiste a un BBVA y tomaste un turno, entonces
    utilizaste este sistema. Es una aplicación web que permite
    administrar turnos de BBVA. Tanto para clientes como para personal
    del banco. En este proyecto se utilizó React, NextJS, Socket.io, Chakra UI y
    MongoDB.`,
    image: "bbva-portfolio.jpg",
    githubUrl: "https://github.com/lucasangelino/BBVATicket",
  },
  {
    title: "Maps",
    subtitle: "Alternativa a Google Maps",
    description: `Alguna vez has utilizado Google Maps para compartir ubicacion en tiempo real con tus amigos?
    Te traigo una buena alternativa. Rápido, facil de usar y con una interfaz amigable. 
    Es este proyecto se utilizó React, Socker.io y NextUI`,
    image: "maps.png",
    githubUrl: "https://github.com/lucasangelino/Maps",
  },
];

export default function Portfolio() {
  const { BRAND_500 } = brandColor;

  return (
    <Container maxW={"7xl"} mt={{ base: 0 }}>
      <Text
        id="portfolio"
        fontSize={{ base: "3xl", md: "6xl" }}
        color={BRAND_500}
        mt={{ base: 10, md: 20 }}
      >
        Algunos de mis proyectos
        <Project />
      </Text>
    </Container>
  );
}
