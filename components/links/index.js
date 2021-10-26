import { useColorModeValue, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function Link({ children, href }) {
  return (
    <ChakraLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("gray.200", "gray.100"),
        backgroundColor: useColorModeValue("brand.500", "brand.800"),
      }}
      href={href}
    >
      <Text fontSize="lg">{children}</Text>
    </ChakraLink>
  );
}
