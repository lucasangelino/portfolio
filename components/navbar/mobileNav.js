import { Box, Stack } from "@chakra-ui/layout";

// Components
import Link from "../links";

export default function MobileNav({ links }) {
  return (
    <Box pb={4} display={{ md: "none" }}>
      <Stack as={"nav"} spacing={4}>
        {links.map((link) => (
          <Link key={link.id} href={link.href}>{link.text}</Link>
        ))}
      </Stack>
    </Box>
  );
}
