import { useColorModeValue, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function Link({ children, href }) {
  return (
    <ChakraLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("brand.800", "brand.600"),
      }}
      href={href}
    >
      <Text fontSize="lg">{children}</Text>
    </ChakraLink>
  );
}
