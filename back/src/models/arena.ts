import mongoose, { Schema, Document } from "mongoose";

export interface IArena extends Document {
  name: string;
  primaryType: mongoose.Types.ObjectId | null; 
  trainers: mongoose.Types.ObjectId[];         
}

const ArenaSchema = new Schema<IArena>(
  {
    name: { type: String, required: true, trim: true },
    primaryType: { type: Schema.Types.ObjectId, ref: "Type" },
    trainers: [{ type: Schema.Types.ObjectId, ref: "Trainer" }],
  }
);

export default mongoose.model<IArena>("Arena", ArenaSchema);