import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Container,
  HStack,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// Components
import Link from "../links";
import SwitchDarkMode from "../buttons/darkModeBtn";
import MobileNav from "../navbar/mobileNav";
import ChangeLogBadge from "../changelog/";
import Logo from "../icons/Logo";


const links = [
  { id: 2, text: "Acerca de mi", special: false, href: "#aboutMe" },
  { id: 3, text: "Portfolio", special: false, href: "#portfolio" },
  { id: 4, text: "Freelance", special: true, href: "#freelance" },
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
            <div className="changelog-badge">
                <ChangeLogBadge />
                <Img 
                  src="/images/logo.svg"
                  alt="Logo"
                  width={'58px'}
                  height={'58px'}
                  pos="absolute"
                />
              </div>
            
            </HStack>
            
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <Link key={link.id} href={link.href}>
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
