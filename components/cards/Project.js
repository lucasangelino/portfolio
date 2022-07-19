import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
  Tag,
  TagLabel,
  HStack,
  Img,
} from "@chakra-ui/react";

export default function Project({
  title,
  desc,
  imgUrl,
  githubUrl,
  demoUrl,
  tags,
  rtl,
}) {
  return (
    <Flex flexDirection={"column"}>
      <Img src={imgUrl} alt={"foto"} />
      <Text p={5} fontSize={"2rem"}>
        {title}
      </Text>
      <Text p={5} fontSize={"1.25rem"}>
        {desc}
      </Text>
    </Flex>
  );
}
