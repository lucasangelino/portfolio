import { Container, Text } from "@chakra-ui/react";

import { ProjectCard } from "../cards/ProjectCard";
import LatestProject from '../latestproject';

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
  }
];

export default function Portfolio() {
  const { BRAND_500 } = brandColor;
  return (
    <Container maxW={"7xl"} mt={{ base: 0 }}>
      <Text
        id="portfolio"
        fontSize={{ base: "4xl", md: "6xl" }}
        color={BRAND_500}
        my={{ base: 10, md: 20 }}
      >
        Último projecto ✨
      </Text>
      <LatestProject />      

      <Text
        fontSize={{ base: "4xl", md: "6xl" }}
        color={BRAND_500}
        my={{ base: 10, md: 20 }}
      >
        Otros proyectos🚀
      </Text>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      
    </Container>
  );
}
