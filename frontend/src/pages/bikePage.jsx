import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Badge,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchBike } from "../api";

export default function BikePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBike(slug)
      .then((data) => setBike(data))
      .catch(() => setError("Bike not found"));
  }, [slug]);

  if (error) {
    return (
      <Box p={6} textAlign="center">
        <Heading size="md" mb={3}>
          {error}
        </Heading>
        <Button onClick={() => navigate("/")} colorScheme="blue">
          Go Home
        </Button>
      </Box>
    );
  }

  if (!bike) {
    return (
      <Box p={6} textAlign="center">
        <Text color="whiteAlpha.700">Loading…</Text>
      </Box>
    );
  }

  const { name, mainPhotoUrl, year, category, spec, description } = bike;

  return (
    <Box px={6} py={8} maxW="1000px" mx="auto">
      <Button mb={4} variant="outline" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Box borderRadius="3xl" overflow="hidden" boxShadow="2xl" mb={6}>
        <Image
          src={mainPhotoUrl}
          alt={name}
          objectFit="cover"
          w="100%"
          h={{ base: "260px", md: "420px" }}
        />
      </Box>

      <Heading mb={2}  color="blackAlpha.900">{name}
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        mb={4}
        align="center"
      >
        {category && (
          <Badge colorScheme="blue" borderRadius="xl" px={3} py={1}>
            {category}
          </Badge>
        )}
        {year && (
          <Badge colorScheme="purple" borderRadius="xl" px={3} py={1}>
            {year}
          </Badge>
        )}
      </Stack>

      <Text color="blackAlpha.800" mb={6}>
        {description}
      </Text>

      {spec && (
        <Box
          bg="rgba(255,255,255,.04)"
          border="1px solid rgba(255,255,255,.08)"
          borderRadius="2xl"
          p={5}
          boxShadow="xl"
        >
          <Heading size="md" mb={3}>
            Specs
          </Heading>
          <Divider borderColor="whiteAlpha.300" mb={3} />
          <Stack spacing={2}>
            {spec.frame && (
              <Text>
                <b>Frame:</b> {spec.frame}
              </Text>
            )}
            {spec.fork && (
              <Text>
                <b>Fork:</b> {spec.fork}
              </Text>
            )}
            {spec.drivetrain && (
              <Text>
                <b>Drivetrain:</b> {spec.drivetrain}
              </Text>
            )}
            {spec.brakes && (
              <Text>
                <b>Brakes:</b> {spec.brakes}
              </Text>
            )}
            {spec.wheels && (
              <Text>
                <b>Wheels:</b> {spec.wheels}
              </Text>
            )}
            {spec.tires && (
              <Text>
                <b>Tires:</b> {spec.tires}
              </Text>
            )}
            {spec.notes && (
              <Text>
                <b>Notes:</b> {spec.notes}
              </Text>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
