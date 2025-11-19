import mongoose from "mongoose";
import { connectDB } from "./config/database.js";
import ArenaModel from "./models/arena";
import AttackModel from "./models/attack.js";
import ItemModel from "./models/item.js";
import TypeModel from "./models/type";
import PokemonModel, { Gender } from "./models/pokemon";
import TrainerModel from "./models/trainer";
import dotenv from "dotenv";
dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI!);
 
  console.log("🗑️ Clearing existing data…");
  await Promise.all([
    TypeModel.deleteMany({}),
    AttackModel.deleteMany({}),
    PokemonModel.deleteMany({}),
    TrainerModel.deleteMany({}),
    ArenaModel.deleteMany({}),
    ItemModel.deleteMany({}),
  ]);

  console.log("✨ Inserting Types…");
  const types = await TypeModel.insertMany([
    { name: "Fire", weaknesses: [], resistances: [] },
    { name: "Water", weaknesses: [], resistances: [] },
    { name: "Grass", weaknesses: [], resistances: [] },
    { name: "Electric", weaknesses: [], resistances: [] },
    { name: "Normal", weaknesses: [], resistances: [] },
  ]);

  // update weaknesses / resistances
  await TypeModel.findByIdAndUpdate(types[0]._id, {
    weaknesses: [types[1]._id], // Fire weak to Water
    resistances: [types[2]._id], // Fire resists Grass
  });

  await TypeModel.findByIdAndUpdate(types[1]._id, {
    weaknesses: [types[3]._id], // Water weak to Electric
    resistances: [types[0]._id], // Water resists Fire
  });

  console.log("✨ Inserting Attacks…");
  const attacks = await AttackModel.insertMany([
    {
      name: "Flamethrower",
      type: types[0]._id,
      power: 90,
      accuracy: 100,
      description: "A strong fire attack.",
    },
    {
      name: "Water Gun",
      type: types[1]._id,
      power: 40,
      accuracy: 100,
      description: "Shoots water.",
    },
    {
      name: "Vine Whip",
      type: types[2]._id,
      power: 45,
      accuracy: 100,
      description: "Strikes with vines.",
    },
    {
      name: "Thunder Shock",
      type: types[3]._id,
      power: 40,
      accuracy: 100,
      description: "Electric shock attack.",
    },
    {
      name: "Tackle",
      type: types[4]._id,
      power: 40,
      accuracy: 100,
      description: "A basic physical hit.",
    },
  ]);

  console.log("✨ Inserting Pokémon…");
  const pokemons = await PokemonModel.insertMany([
    {
      name: "Charmander",
      types: [types[0]._id],
      attacks: [attacks[0]._id, attacks[4]._id],
      height: 0.6,
      weight: 8.5,
      description: "A small fire lizard.",
      gender: Gender.MALE,
      evolutions: [],
    },
    {
      name: "Squirtle",
      types: [types[1]._id],
      attacks: [attacks[1]._id, attacks[4]._id],
      height: 0.5,
      weight: 9.0,
      description: "A small turtle Pokémon.",
      gender: Gender.FEMALE,
      evolutions: [],
    },
    {
      name: "Bulbasaur",
      types: [types[2]._id],
      attacks: [attacks[2]._id, attacks[4]._id],
      height: 0.7,
      weight: 6.9,
      description: "A seed Pokémon.",
      gender: Gender.MALE,
      evolutions: [],
    },
    {
      name: "Pikachu",
      types: [types[3]._id],
      attacks: [attacks[3]._id, attacks[4]._id],
      height: 0.4,
      weight: 6.0,
      description: "An electric mouse.",
      gender: Gender.UNKNOWN,
      evolutions: [],
    },
    {
      name: "Eevee",
      types: [types[4]._id],
      attacks: [attacks[4]._id],
      height: 0.3,
      weight: 6.5,
      description: "A highly adaptable Pokémon.",
      gender: Gender.FEMALE,
      evolutions: [],
    },
  ]);

  console.log("✨ Inserting Items…");
  const items = await ItemModel.insertMany([
    {
      name: "Potion",
      categories: ["healing"],
      description: "Restores 20 HP.",
    },
    {
      name: "Super Potion",
      categories: ["healing"],
      description: "Restores 50 HP.",
    },
    {
      name: "Poké Ball",
      categories: ["capture"],
      description: "Catches Pokémon.",
    },
    {
      name: "Antidote",
      categories: ["status"],
      description: "Cures poison.",
    },
    {
      name: "Rare Candy",
      categories: ["special"],
      description: "Instant level-up.",
    },
  ]);

  console.log("✨ Inserting Trainers…");
  const trainers = await TrainerModel.insertMany([
    {
      name: "Ash",
      activePokemons: [pokemons[3]._id], // Pikachu
      capturedPokemons: pokemons.map((p) => p._id),
      items: [items[2]._id], // Poké Ball
    },
    {
      name: "Misty",
      activePokemons: [pokemons[1]._id], // Squirtle
      capturedPokemons: [pokemons[1]._id],
      items: [items[0]._id], // Potion
    },
    {
      name: "Brock",
      activePokemons: [pokemons[2]._id], // Bulbasaur
      capturedPokemons: [pokemons[2]._id],
      items: [items[1]._id], // Super Potion
    },
    {
      name: "Gary",
      activePokemons: [pokemons[4]._id], // Eevee
      capturedPokemons: [pokemons[4]._id],
      items: [items[4]._id], // Rare Candy
    },
    {
      name: "Lt. Surge",
      activePokemons: [pokemons[3]._id], // Pikachu
      capturedPokemons: [pokemons[3]._id],
      items: [items[3]._id], // Antidote
    },
  ]);

  console.log("✨ Inserting ArenaModels…");
  await ArenaModel.insertMany([
    {
      name: "Pewter Gym",
      primaryType: types[2]._id, // Grass (souvent Roche mais tu peux changer)
      trainers: [trainers[2]._id],
    },
    {
      name: "Cerulean Gym",
      primaryType: types[1]._id, // Water
      trainers: [trainers[1]._id],
    },
    {
      name: "Vermilion Gym",
      primaryType: types[3]._id, // Electric
      trainers: [trainers[4]._id],
    },
    {
      name: "Viridian Gym",
      primaryType: types[4]._id, // Normal
      trainers: [trainers[3]._id],
    },
    {
      name: "Cinnabar Gym",
      primaryType: types[0]._id, // Fire
      trainers: [trainers[0]._id],
    },
  ]);

  console.log("✅ Database successfully seeded!");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  mongoose.disconnect();
});