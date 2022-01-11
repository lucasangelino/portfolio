import {
  Box,
  Stack,
  useColorModeValue,
  VStack,
  Container,
} from "@chakra-ui/react";
import { HighProjectCard } from "../cards/HProjectCard";

// Background photos
import { discordblur } from "../../public/images/discord2blur.jpg";

// TODO Arreglar el gradientcolors. Si hay mas projectos que elementos en la lista
// rompe ya que hace un overflow del array. No funciona el "||"
const gradientColors = [
  {
    startColor: "#EF6B00",
    endColor: "#FFA000",
  },
  {
    startColor: "#ff4b2b",
    endColor: "#ff416c",
  },
  {
    startColor: "#2F80ED",
    endColor: "#56CCF2",
  },
  {
    startColor: "#7b920a",
    endColor: "#add100",
  },
];

export function HighlightedProjects({ projects }) {
  return (
    <VStack
      align={"center"}
      direction={{ base: "column" }}
      my={{ base: 50, md: 15 }}
    >
      {projects.map((highPRoject, index) => (
        <Box
          key={index}
          bgImage={'https://cdn1.epicgames.com/salesEvent/salesEvent/egs-discord-discord-s1-2560x1440-51474ee7abe3_2560x1440-e14a2b58e93768f0abc47dbf62a4ee86'}
          bgPosition={'center'}
          bgSize={'cover'}
          // bgGradient={`linear(to right, ${
          //   gradientColors[index]["startColor"] || "#EF6B00"
          // }, ${gradientColors[index]["endColor"] || "#FFA000"})`}
          rounded={"lg"}
          width={{ base: "full", md: "100%" }}
          p={{base: 5, md: 10}}
        >
          <HighProjectCard key={index} project={highPRoject} />
        </Box>
      ))}
    </VStack>
  );
}
