import mongoose, { Schema, Document } from "mongoose";

interface IType extends Document {
  name: string;
  weaknesses: mongoose.Types.ObjectId[];   // refs to Type
  resistances: mongoose.Types.ObjectId[]; // refs to Type
}

const TypeSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    weaknesses: [{ type: Schema.Types.ObjectId, ref: "Type" }],
    resistances: [{ type: Schema.Types.ObjectId, ref: "Type" }],
  },
);

export default mongoose.model<IType>("Type", TypeSchema);