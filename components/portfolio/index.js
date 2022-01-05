import {
  Container,
  Text,
} from "@chakra-ui/react";

import { ProjectCard } from '../cards/ProjectCard'
import { HighlightedProjects } from '../projectList/HighlightedProjects'

// styles
import { brandColor } from "../../theme/constants";

const projects = [
  {
    name: "VotAR",
    desc: `Con esta aplicacion podras crear preguntas y ver las respuestas de tus usuarios en tiempo real. 
    Los resultado tambien apareceran graficados en la pantalla. Perfecto para presentaciones en tu trabajo!`,
    img: "votar.png",
    githubUrl: 'https://github.com/'
  },
  {
    name: "Twittar",
    desc: `Alguna vez usaste Twitter? Bueno, dejá de usarla porque la verdadera
    aplicacion es Twittar. Permite publicar mensajes, fotos y compartir
    publicaciones con amigos. Creada con React, Node, Firebase y basada
    en Mobile Only.`,
    githubUrl: 'https://github.com/'
  },
  {
    name: "Url Shortener",
    desc: `Con este proyecto podrás acortar cualquier url de manera rapida y sencilla`,
    githubUrl: 'https://github.com/'
  }
]

const destacados = [
  {
    name: "Chat.io",
    description: `Una aplicacion de chat para que puedas compartir cosas con tus amigos. Mensajes, gifs, memes y mucho mas`,
    githubUrl: 'https://github.com/'
  },
]

export default function Portfolio() {
  const { BRAND_500 } = brandColor;
  return (
    <Container maxW={"7xl"} mt={{base: 0}}>
      <Text fontSize={{base: "4xl", md: '6xl'}} color={BRAND_500}>
        Proyectos destacados ✨
      </Text>
      <HighlightedProjects projects={destacados} />

      <Text fontSize={{base: "4xl", md: '6xl'}} color={BRAND_500} mt={{base: 10, md: 20}}>
        Otros proyectos🚀
      </Text>
      {
        projects.map((project, index) => <ProjectCard key={index} project={project} />)
      }
    </Container>
  );
}

