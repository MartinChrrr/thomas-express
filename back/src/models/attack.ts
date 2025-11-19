import mongoose, { Schema, Document } from "mongoose";

export interface IAttack extends Document {
  name: string;
  type: mongoose.Types.ObjectId; // ref to Type
  power?: number;
  accuracy?: number;
  description?: string;
}

const AttackSchema = new Schema<IAttack>(
  {
    name: { type: String, required: true, trim: true },
    type: { type: Schema.Types.ObjectId, ref: "Type", required: true },
    power: { type: Number, min: 0 },
    accuracy: { type: Number, min: 0, max: 100 },
    description: { type: String },
  }
);

export default mongoose.model<IAttack>("Attack", AttackSchema);