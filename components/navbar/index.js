import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
  HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Components
import Link from "../links";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container maxW="container.xl">
        <Box px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>Logo</Box>

            <Flex alignItems={"center"}>
              <HStack direction={"row"} spacing={7}>
                <Link href={"#"}>Home</Link>
                <Link href={"#"}>Acerca de mi</Link>
                <Link href={"#"}>Porfolio</Link>
                <Link href={"#"}>Freelance</Link>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </HStack>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
