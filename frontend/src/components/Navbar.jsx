import { Flex, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg="gray.800"
      color="white"
      p={4}
      align="center"
      justify="space-between"
    >
      <Heading size="md">My Bikes</Heading>
      <Flex gap={3}>
        <Button as={Link} to="/" colorScheme="blue" variant="outline">
          Home
        </Button>
        <Button as={Link} to="/signup" colorScheme="teal">
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
}
