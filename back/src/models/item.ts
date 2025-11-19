import mongoose, { Schema, Document } from "mongoose";

export interface IItem extends Document {
  name: string;
  categories: string[]; // could be enum strings (e.g. ["healing","battle","key"]) if you want
  description?: string;
}

const ItemSchema = new Schema<IItem>(
  {
    name: { type: String, required: true, trim: true },
    categories: [{ type: String, trim: true }], // e.g. ["healing", "battle", "key"]
    description: { type: String },
  }
);

export default mongoose.model<IItem>("Item", ItemSchema);