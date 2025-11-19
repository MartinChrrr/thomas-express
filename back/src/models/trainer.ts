import mongoose, { Schema, Document } from "mongoose";

export interface ITrainer extends Document {
  name: string;
  activePokemons: mongoose.Types.ObjectId[];   // refs to Pokemon (active team)
  capturedPokemons: mongoose.Types.ObjectId[]; // refs to Pokemon (all captured)
  items: mongoose.Types.ObjectId[];            // refs to Item
}

const TrainerSchema = new Schema<ITrainer>(
  {
    name: { type: String, required: true, trim: true },
    activePokemons: [{ type: Schema.Types.ObjectId, ref: "Pokemon" }],
    capturedPokemons: [{ type: Schema.Types.ObjectId, ref: "Pokemon" }],
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  }
);

export default mongoose.model<ITrainer>("Trainer", TrainerSchema);