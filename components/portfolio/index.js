import {
  Container,
  Text,
} from "@chakra-ui/react";

import { ProjectCard } from '../cards/ProjectCard'

// styles
import { brandColor } from "../../theme/constants";

const projects = [
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

export default function Portfolio() {
  const { BRAND_500 } = brandColor;
  return (
    <Container maxW={"7xl"} mt={60}>
      <Text fontSize="6xl" color={BRAND_500}>
        Ultimos proyectos🚀
      </Text>

      {
        projects.map(project => <ProjectCard project={project} />)
      }
    </Container>
  );
}

