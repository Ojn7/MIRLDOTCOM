import { Box, Heading, Text, Image, SimpleGrid, Card, CardBody } from "@chakra-ui/react";

const bikes = [
  { name: "Specialized Stumpjumper M2", desc: "A legendary classic reborn.", img: "https://picsum.photos/seed/stumpjumper/1400/900" },
  { name: "Santa Cruz 5010 V3",        desc: "Playful trail ripper.",       img: "https://picsum.photos/seed/5010v3/1400/900" },
  { name: "Rockhopper Comp",           desc: "Reliable XC performance.",    img: "https://picsum.photos/seed/rockhopper/1400/900" },
];

export default function HomePage() {
  return (
    <Box px={6} py={10} maxW="1200px" mx="auto">
      {/* HERO */}
      <Box position="relative" borderRadius="3xl" overflow="hidden" boxShadow="2xl" mb={10}>
        <Image
          src="/src/assets/5010.png"
          alt="Hero Bike"
          objectFit="cover"
          w="100%"
          h={{ base: "260px", md: "420px" }}
        />
        <Heading
          position="absolute"
          bottom={{ base: 4, md: 8 }}
          left={{ base: 4, md: 8 }}
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="extrabold"
          color="white"
          letterSpacing="-1px"
          textShadow="0 0 24px rgba(0,0,0,.45)"
        >
          MIRL DOT COM
        </Heading>
      </Box>

      {/* CARDS */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {bikes.map((b) => (
          <Card
            key={b.name}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="xl"
            bg="rgba(255,255,255,.04)"
            border="1px solid rgba(255,255,255,.08)"
            _hover={{ transform: "translateY(-4px)", borderColor: "whiteAlpha.300", transition: "0.2s" }}
          >
            <Image src={b.img} alt={b.name} objectFit="cover" h="260px" w="100%" />
            <CardBody>
              <Heading fontSize="xl" mb={2}>{b.name}</Heading>
              <Text color="whiteAlpha.800">{b.desc}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
