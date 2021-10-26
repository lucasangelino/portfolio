import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Container,
  HStack,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";

// Components
import Link from "../links";
import SwitchDarkMode from "../buttons/darkModeBtn";
import MobileNav from "../navbar/mobileNav";

const links = [
  { id: 1, text: "Home", special: true },
  { id: 2, text: "Acerca de mi", special: false },
  { id: 3, text: "Portfolio", special: false },
  { id: 4, text: "Freelance", special: true },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container maxW="container.xl">
        <Box>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>Logo</Box>
            </HStack>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <Link key={link.id} href={"#"}>
                  {link.text}
                </Link>
              ))}
            </HStack>
            <SwitchDarkMode />
          </Flex>

          {isOpen ? <MobileNav links={links} /> : null}
        </Box>
      </Container>
    </>
  );
}
