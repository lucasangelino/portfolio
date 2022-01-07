import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="100px"
        fontWeight="extrabold"
      >
        404
      </Text>
      <Text fontSize="30px" mt={3} mb={2}>
        La pagina que buscas no existe
      </Text>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
}
