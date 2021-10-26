// libs
import { Container, Flex, VStack } from "@chakra-ui/layout";

// components
import { Cart } from "../components/cart/";
import { Details } from "../components/detail/";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
