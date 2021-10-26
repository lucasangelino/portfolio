import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid as Grid,
  GridItem,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Select } from "@chakra-ui/select";

function Details() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <Grid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel key={1}>Firt Name</FormLabel>
            <Input placeholder="Luke" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel key={2}>Last Name</FormLabel>
            <Input placeholder="Skywalker" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel key={3}>Adress</FormLabel>
            <Input placeholder="Naboo" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel key={4}>City</FormLabel>
            <Input placeholder="Naboo" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel key={5}>Country</FormLabel>
            <Select>
              <option value="argentina">Argentina</option>
              <option value="usa">United State of America</option>
              <option value="brasil">Brasil</option>
              <option value="uruguay">Uruguay</option>
            </Select>
          </FormControl>
        </GridItem>
        <Checkbox defaultChecked={true}>Ship to billing address</Checkbox>
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Place Order
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export { Details };
