import {
  VStack,
  Heading,
  Text,
  HStack,
  AspectRatio,
  Stack,
  Divider,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";

function Cart() {
  const { toggleColorMode } = useColorMode();
  return (
    <VStack
      w="full"
      h="full"
      p={5}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>
          If the price is too hard on your eyes
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image title="article" alt="article" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Pokeball</Heading>
            <Text color="gray.600">Pokeball red infra</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>

      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image title="article" alt="article" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Ginger Bread</Heading>
            <Text color="gray.600">Ginger 400X</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $12.5
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color="gray.500">Subtotal</Text>
          <Heading size="sm">$131.5</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.500">Taxes</Text>
          <Heading size="sm">$0.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.500">Shipping</Text>
          <Heading size="sm">$20.00</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color="gray.500">Shipping</Text>
        <Heading size="lg">$20.00</Heading>
      </HStack>
    </VStack>
  );
}

export { Cart };
