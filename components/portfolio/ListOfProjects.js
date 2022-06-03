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

const projects = [
  {
    name: "Live Map",
    github: "https://github.com/lucasangelino",
    img: "/images/maps.webp",
  },
  {
    name: "Chat io",
    github: "https://github.com/lucasangelino/Ping-Chat",
    img: "/images/chat.PNG",
  },
  {
    name: "Gifinder",
    github: "https://github.com/lucasangelino/gifinder",
    img: "/images/gify.PNG",
  },
];

export default function ListOfProjects() {
  return (
    <>
      <Divider marginBottom={5} />
      <Heading marginBottom={{ base: 0, sm: 2, md: 10 }}>
        Todos los proyectos
      </Heading>
      <Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={2}
        >
          {projects.map((project, index) => (
            <GridItem key={index}>
              <Box
                height={250}
                width={350}
                bgColor={"twitter.100"}
                padding={10}
                borderRadius={10}
                position={"relative"}
                marginRight={5}
                marginBottom={{ base: 0, sm: 2, md: 5 }}
              >
                <Link href={project.github} isExternal>
                  <Image
                    src={project.img}
                    layout="fill"
                    alt={project.name}
                    style={{ objectFit: "cover", borderRadius: 5 }}
                  />
                </Link>
                <Box
                  position={"absolute"}
                  bottom={0}
                  right={0}
                  bgGradient="linear-gradient(0deg, #0d0e0e 0%, transparent 100%)"
                  width={"100%"}
                  textAlign={"right"}
                  borderBottomRadius={10}
                >
                  <Text margin={5}>{project.name}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Divider marginBottom={5} />
    </>
  );
}
