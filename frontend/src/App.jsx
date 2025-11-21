import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  Stack,
  Divider,
} from "@chakra-ui/react";

// ---- Import your images from src/assets ----
import img94stumpy from "./assets/94stumpy.jpeg";
import img5010 from "./assets/5010.png";
import img98Rock from "./assets/98Rock.jpeg";
import imgLoofah from "./assets/loofah.jpeg";
import img93Stumpy from "./assets/93Stumpy.jpeg";
import heroCover from "./assets/94stumpCover.jpeg";

// ---- Helpers ----
const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

// ---- Your bike data (edit names/descriptions/specs freely) ----
const bikes = [
  {
    name: "Specialized Stumpjumper M2 FSR",
    desc: "A legendary classic reborn.",
    cardImg: img94stumpy,
    heroImg: img94stumpy,
    year: 1994,
    category: "XC / Vintage",
    spec: { frame: "M2 Metal Matrix", fork: "1998 Marzzochi Bomber X-fly", drivetrain: "Sram SX 12-speed", wheels: '26"' },
  },
  {
    name: "Santa Cruz 5010 V3",
    desc: "Playful trail ripper.",
    cardImg: img5010,
    heroImg: img5010,
    year: 2018,
    category: "Trail",
    spec: { frame: "Carbon 130mm", fork: "Lyrik 160mm", drivetrain: "SRAM GX/NX", wheels: '27.5"' },
  },
  {
    name: "1998 Rockhopper Comp A1",
    desc: "Reliable XC performance.",
    cardImg: img98Rock,
    heroImg: img98Rock,
    year: 1998,
    category: "XC",
    spec: { frame: "A1 Aluminum", fork: "—", drivetrain: "Shimano", wheels: '26"' },
  },
  {
    name: "Loofah",
    desc: "Reliable XC performance.",
    cardImg: imgLoofah,
    heroImg: imgLoofah,
    year: 20_00,
    category: "XC",
    spec: { frame: "—", fork: "—", drivetrain: "—", wheels: '—' },
  },
  {
    name: "1993 Specialized Stumpjumper M2 FS",
    desc: "Classic alloy with FS fork.",
    cardImg: img93Stumpy,
    heroImg: img93Stumpy,
    year: 1993,
    category: "XC / Vintage",
    spec: { frame: "M2 FS", fork: "—", drivetrain: "—", wheels: '26"' },
  },
].map((b) => ({ ...b, slug: slugify(b.name) }));

const getBike = (slug) => bikes.find((b) => b.slug === slug);

// ---- Navbar ----
function Navbar() {
  return (
    <Flex as="nav" bg="gray.800" color="white" p={4} gap={3}>
      <Button as={Link} to="/" variant="outline" colorScheme="blue">
        Home
      </Button>
      <Button as={Link} to="/signup" colorScheme="teal">
        Sign Up
      </Button>
    </Flex>
  );
}

// ---- Home Page (hero + cards) ----
function HomePage() {
  return (
    <Box px={6} py={10} maxW="1200px" mx="auto" color="white">
      {/* HERO */}
      <Box position="relative" borderRadius="3xl" overflow="hidden" boxShadow="2xl" mb={10}>
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
            _hover={{ transform: "translateY(-4px)", borderColor: "whiteAlpha.300", transition: "0.2s" }}
          >
            <Image src={b.cardImg} alt={b.name} objectFit="cover" h="260px" w="100%" />
            <CardBody>
              <Heading fontSize="xl" mb={1}>{b.name}</Heading>
              <Text color="whiteAlpha.800">{b.desc}</Text>
              <Badge mt={3} colorScheme="blue" borderRadius="xl">{b.category}</Badge>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

// ---- Individual Bike Page (/bike/:slug) ----
function BikePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const bike = getBike(slug);

  if (!bike) {
    return (
      <Box p={6} color="black" textAlign="center">
        <Heading size="md" mb={3}>Bike not found</Heading>
        <Button onClick={() => navigate("/")} colorScheme="blue">Go Home</Button>
      </Box>
    );
  }

  const { name, heroImg, year, category, spec, desc } = bike;

  return (
    <Box px={6} py={8} maxW="1000px" mx="auto" color="black">
      <Button mb={4} variant="outline" onClick={() => navigate(-1)}>← Back</Button>

      <Box borderRadius="3xl" overflow="hidden" boxShadow="2xl" mb={6}>
        <Image src={heroImg} alt={name} objectFit="cover" w="100%" h={{ base: "260px", md: "420px" }} />
      </Box>

      <Heading mb={2}>{name}</Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4} align="center">
        <Badge colorScheme="blue" borderRadius="xl" px={3} py={1}>{category}</Badge>
        <Badge colorScheme="purple" borderRadius="xl" px={3} py={1}>{year}</Badge>
      </Stack>

      <Text color="whiteAlpha.800" mb={6}>{desc}</Text>

      <Box
        bg="rgba(255,255,255,.04)"
        border="1px solid rgba(255,255,255,.08)"
        borderRadius="2xl"
        p={5}
        boxShadow="xl"
      >
        <Heading size="md" mb={3}>Specs</Heading>
        <Divider borderColor="whiteAlpha.300" mb={3} />
        <Stack spacing={2}>
          <Text><b>Frame:</b> {spec.frame}</Text>
          <Text><b>Fork:</b> {spec.fork}</Text>
          <Text><b>Drivetrain:</b> {spec.drivetrain}</Text>
          <Text><b>Wheels:</b> {spec.wheels}</Text>
        </Stack>
      </Box>
    </Box>
  );
}

// ---- Sign Up (placeholder) ----
function SignUpPage() {
  return (
    <Box p={6} color="white">
      <Heading mb={2}>Sign Up</Heading>
      <Text color="gray.300">Your form goes here.</Text>
    </Box>
  );
}

// ---- App shell + routes ----
export default function App() {
  return (
    <Box minH="100vh" bg="white.900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/bike/:slug" element={<BikePage />} />
      </Routes>
    </Box>
  );
}
