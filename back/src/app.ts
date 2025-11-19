import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import cors from "cors"

import routerArena from "./routes/arenaRoutes.js";
import routerAttack from "./routes/attackRoutes.js";
import routerItem from "./routes/itemsRoutes.js";
import routerPokemon from "./routes/pokemonRoutes.js";
import routerTrainer from "./routes/trainerRoutes.js";
import routerType from "./routes/typeRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api",routerArena);
app.use("/api",routerAttack);
app.use("/api",routerItem);
app.use("/api",routerPokemon);
app.use("/api",routerTrainer);
app.use("/api", routerType);

export default app;