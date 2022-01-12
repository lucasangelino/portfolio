import { Container, Text } from "@chakra-ui/react";

import { ProjectCard } from "../cards/ProjectCard";
import { HighlightedProjects } from "../projectList/HighlightedProjects";
import ProjectGrid from '../grid/'

// styles
import { brandColor } from "../../theme/constants";

const projects = [
  {
    name: "VotAR",
    desc: `Con esta aplicacion podras crear preguntas y ver las respuestas de tus usuarios en tiempo real. 
    Los resultado tambien apareceran graficados en la pantalla. Perfecto para presentaciones en tu trabajo!`,
    img: "votar.png",
    githubUrl: "https://github.com/",
  }
];

const destacados = [
  {
    name: "BBVA App",
    description: `Una aplicacion de chat para que puedas compartir cosas con tus amigos. Mensajes, gifs, memes y mucho mas`,
    githubUrl: "https://github.com/lucasangelino/BBVATicket",
  },
  {
    name: "Memes",
    description: `Una aplicacion para buscar Memes & Gifts. Puedes compartirlos con tus amigos 🤙`,
    githubUrl: "https://github.com/",
  },
  {
    name: "BBVA App",
    description: `Una aplicacion de chat para que puedas compartir cosas con tus amigos. Mensajes, gifs, memes y mucho mas`,
    githubUrl: "https://github.com/",
  },
  {
    name: "Chat.io",
    description: `Una aplicacion de chat para que puedas compartir cosas con tus amigos. Mensajes, gifs, memes y mucho mas`,
    githubUrl: "https://github.com/",
  },
];

export default function Portfolio() {
  const { BRAND_500 } = brandColor;
  return (
    <Container maxW={"7xl"} mt={{ base: 0 }}>
      <Text
        id="portfolio"
        fontSize={{ base: "4xl", md: "6xl" }}
        color={BRAND_500}
      >
        Último projecto ✨
      </Text>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}

      <Text
        fontSize={{ base: "4xl", md: "6xl" }}
        color={BRAND_500}
        mt={{ base: 10, md: 20 }}
      >
        Otros proyectos🚀
      </Text>
      <ProjectGrid />
      
    </Container>
  );
}
