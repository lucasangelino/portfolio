import { Container, Text } from "@chakra-ui/react";

import { ProjectCard } from "../cards/ProjectCard";
import LatestProject from "../latestproject";

// styles
import { brandColor } from "../../theme/constants";

const projects = [
  {
    title: "BBVA",
    subtitle: "Sistema de Turnos",
    description: `Si alguna vez fuiste a un BBVA y tomaste un turno, entonces
    utilizaste este sistema. Es una aplicación web que permite
    administrar turnos de BBVA. Tanto para clientes como para personal
    del banco. En este proyecto se utilizó React, NextJS, Chakra UI y
    MongoDB.`,
    image: "bbva-portfolio.jpg",
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
      <LatestProject {...latestProject[0]} />

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
