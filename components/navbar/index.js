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

const links = ["Home", "Acerca de mi", "Portfolio", "Freelance"];

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
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {links.map((link) => (
                  <Link key={link} href={link}>
                    {link}
                  </Link>
                ))}
              </HStack>
            </HStack>
            <SwitchDarkMode />
          </Flex>

          {isOpen ? <MobileNav links={links} /> : null}
        </Box>
      </Container>
    </>
  );
}
