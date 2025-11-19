import mongoose, { Schema, Document } from "mongoose";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  GENDERLESS = "genderless",
  UNKNOWN = "unknown",
}

export interface IPokemon extends Document {
  name: string;
  types: mongoose.Types.ObjectId[];    // refs to Type
  attacks: mongoose.Types.ObjectId[];  // refs to Attack
  height?: number;                     // in meters (or chosen unit)
  weight?: number;                     // in kg (or chosen unit)
  description?: string;
  gender: Gender;
  evolutions: mongoose.Types.ObjectId[]; // refs to Pokemon
}

const PokemonSchema = new Schema<IPokemon>(
  {
    name: { type: String, required: true, trim: true },
    types: [{ type: Schema.Types.ObjectId, ref: "Type", required: true }],
    attacks: [{ type: Schema.Types.ObjectId, ref: "Attack" }],
    height: { type: Number, min: 0 }, // e.g., meters
    weight: { type: Number, min: 0 }, // e.g., kilograms
    description: { type: String },
    gender: {
      type: String,
      enum: Object.values(Gender),
      default: Gender.UNKNOWN,
    },
    evolutions: [{ type: Schema.Types.ObjectId, ref: "Pokemon" }],
  }
);

export default mongoose.model<IPokemon>("Pokemon", PokemonSchema);