import mongoose from "mongoose";

const BikeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true, index: true }, // 👈 pretty URL
    year: Number,
    brand: String,
    category: String,
    description: String,
    mainPhotoUrl: String,
    gallery: [String],
    spec: {
      frame: String,
      fork: String,
      shock: String,
      drivetrain: String,
      brakes: String,
      wheels: String,
      tires: String,
      notes: String,
    },
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Bike", BikeSchema);
