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
  Badge,
  Divider,
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
      <Box width={"100%"}>
        <Img src={imgUrl} alt={`${title} image`} height={"16rem"} />
      </Box>
      <Text p={5} fontSize={"2rem"}>
        {title}
      </Text>
      <Box>
        {tags.map((tag, index) => (
          <Badge key={index} mx={2} variant={"solid"}>
            {tag}
          </Badge>
        ))}
      </Box>
      <Text p={5} fontSize={"1.25rem"}>
        {desc}
      </Text>
    </Flex>
  );
}
