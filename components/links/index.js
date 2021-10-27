import { useColorModeValue, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function Link({ children, href }) {
  return (
    <ChakraLink
      px={2}
      py={1}
      rounded={"md"}
      color={"gray.500"}
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("gray.100", "white"),
        backgroundColor: useColorModeValue("brand.500", "brand.800"),
      }}
      href={href}
    >
      <Text fontSize="xl">{children}</Text>
    </ChakraLink>
  );
}
