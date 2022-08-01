import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text color={"#FC3503"} fontSize="100px" fontWeight="extrabold">
        404
      </Text>
      <Text fontSize="30px" mt={3} mb={2}>
        La pagina que buscas no existe
      </Text>
      <Link href="/">
        <Button variant="outline" colorScheme="gray">
          Volver
        </Button>
      </Link>
    </Box>
  );
}
