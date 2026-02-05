// src/pages/bikes.js
import img94stumpy from "../assets/94stumpy.jpeg";
import img5010 from "../assets/5010.png";
import img98Rock from "../assets/98Rock.jpeg";
import imgLoofah from "../assets/loofah.jpeg";
import img93Stumpy from "../assets/93Stumpy.jpeg";

const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

export const bikes = [
  {
    name: "Specialized Stumpjumper M2 FSR",
    description: "A legendary classic reborn.",
    mainPhotoUrl: img94stumpy,
    year: 1994,
    category: "XC / Vintage",
    spec: {
      frame: "M2 Metal Matrix",
      fork: "1998 Marzzochi Bomber X-fly",
      drivetrain: "Sram SX 12-speed",
      wheels: '26"',
    },
  },
  {
    name: "Santa Cruz 5010 V3",
    description: "Playful trail ripper.",
    mainPhotoUrl: img5010,
    year: 2018,
    category: "Trail",
    spec: {
      frame: "Carbon 130mm",
      fork: "Lyrik 160mm",
      drivetrain: "SRAM GX/NX",
      wheels: '27.5"',
    },
  },
  {
    name: "1998 Rockhopper Comp A1",
    description: "Reliable XC performance.",
    mainPhotoUrl: img98Rock,
    year: 1998,
    category: "XC",
    spec: { frame: "A1 Aluminum", fork: "—", drivetrain: "Shimano", wheels: '26"' },
  },
  {
    name: "Loofah",
    description: "Reliable XC performance.",
    mainPhotoUrl: imgLoofah,
    year: 2000,
    category: "XC",
    spec: { frame: "—", fork: "—", drivetrain: "—", wheels: '—' },
  },
  {
    name: "1993 Specialized Stumpjumper M2 FS",
    description: "Classic alloy with FS fork.",
    mainPhotoUrl: img93Stumpy,
    year: 1993,
    category: "XC / Vintage",
    spec: { frame: "M2 FS", fork: "—", drivetrain: "—", wheels: '26"' },
  },
].map((b) => ({ ...b, slug: slugify(b.name) }));

export const getBike = (slug) => bikes.find((b) => b.slug === slug);
