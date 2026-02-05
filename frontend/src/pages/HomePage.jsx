import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroCover from "../assets/94stumpCover.jpeg";
import { fetchBikes } from "../api";

export default function HomePage() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBikes()
      .then((data) => setBikes(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box px={6} py={10} maxW="1200px" mx="auto" color="white">
      {/* HERO */}
      <Box
        position="relative"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="2xl"
        mb={10}
      >
        <Image
          src={heroCover}
          alt="Hero Bike"
          objectFit="cover"
          w="100%"
          h={{ base: "260px", md: "500px" }}
        />
        <Heading
          position="absolute"
          top={{ base: 20, md: 36 }}
          left="1%"
          transform="translateX(14%)"
          textAlign="center"
          fontSize={{ base: "5xl", md: "8xl" }}
          fontWeight="bold"
          color="white"
          letterSpacing="0px"
          textShadow="0 0 24px rgba(0,0,0,.45)"
        >
          MIRL DOT COM
        </Heading>
      </Box>

      {loading && <Text color="whiteAlpha.700">Loading bikes…</Text>}

      {!loading && bikes.length === 0 && (
        <Text color="whiteAlpha.700">
          No bikes yet. Add one via the API (POST /api/bikes).
        </Text>
      )}

      {/* CARDS */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {bikes.map((b) => (
          <Card
            key={b.slug}
            as={Link}
            to={`/bike/${b.slug}`}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="xl"
            bg="rgba(255,255,255,.04)"
            border="1px solid rgba(255,255,255,.08)"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "whiteAlpha.300",
              transition: "0.2s",
            }}
          >
            <Image
              src={b.mainPhotoUrl}
              alt={b.name}
              objectFit="cover"
              h="260px"
              w="100%"
            />
            <CardBody>
              <Heading fontSize="xl" mb={1}>
                {b.name}
              </Heading>
              <Text color="whiteAlpha.800">{b.description}</Text>
              {b.category && (
                <Badge mt={3} colorScheme="blue" borderRadius="xl">
                  {b.category}
                </Badge>
              )}
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
