// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import BikePage from "./pages/BikePage";
import SignUpPage from "./pages/SignUpPage";

// ---- Navbar ----
function Navbar() {
  return (
    <Flex as="nav" bg="gray.900" color="white" p={4} gap={3}>
      <Button as={Link} to="/" variant="outline" colorScheme="blue">
        Home
      </Button>
      <Button as={Link} to="/signup" colorScheme="teal">
        Sign Up
      </Button>
    </Flex>
  );
}

export default function App() {
  return (
    <Box minH="100vh" bg="gray.950" color="white">
      {/* ^ `white.900` isn't a Chakra color; use `gray.900` or `gray.950` */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/bike/:slug" element={<BikePage />} />
      </Routes>
    </Box>
  );
}
