import { Box, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import { HighProjectCard } from "../cards/HProjectCard";

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
    <VStack align={"center"} direction={{ base: "column", md: "row" }}>
      {projects.map((highPRoject, index) => (
        <Box
          key={index}
          bgGradient={`linear(to right, ${
            gradientColors[index]["startColor"] || "#EF6B00"
          }, ${gradientColors[index]["endColor"] || "#FFA000"})`}
          rounded={"lg"}
          my={{ base: 50, md: 15 }}
          width={{ base: "full", md: "100%" }}
          height={{ base: "full", md: "auto" }}
          p={{ base: 5, md: 10 }}
        >
          <HighProjectCard key={index} project={highPRoject} />
        </Box>
      ))}
    </VStack>
  );
}
