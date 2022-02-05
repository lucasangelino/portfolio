import { Container, Text } from "@chakra-ui/react";

import { ProjectCard } from "../cards/ProjectCard";
import LatestProject from "../latestproject";

// styles
import { brandColor } from "../../theme/constants";

const projects = [
  {
    name: "VotAR",
    desc: `Con esta aplicacion podras crear preguntas y ver las respuestas de tus usuarios en tiempo real. 
    Los resultado tambien apareceran graficados en la pantalla. Perfecto para presentaciones en tu trabajo!`,
    img: "votar.png",
    githubUrl: "https://github.com/",
  },
];

export default function Portfolio() {
  const { BRAND_500 } = brandColor;

  const latestProject = projects.slice(0, 1);
  const restProjects = projects.slice(1);

  return (
    <Container maxW={"7xl"} mt={{ base: 0 }}>
      <Text
        id="portfolio"
        fontSize={{ base: "3xl", md: "6xl" }}
        color={BRAND_500}
        mt={{ base: 10, md: 20 }}
      >
        Último projecto ✨
      </Text>
      <LatestProject />

      {restProjects.length > 0 && (
        <>
          <Text fontSize={{ base: "3xl", md: "6xl" }} color={BRAND_500} mt={10}>
            Otros proyectos🚀
          </Text>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </>
      )}
    </Container>
  );
}
