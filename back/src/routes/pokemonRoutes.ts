import {Create, ReadAll, ReadFromId, UpdateFromId ,DeleteFromId} from "../controllers/pokemonController";
import { Router } from "express";

const routerPokemon = Router();


routerPokemon.get("/pokemon", ReadAll );
routerPokemon.post("/pokemon", Create );
routerPokemon.get("/pokemon/:id", ReadFromId );
routerPokemon.put("/pokemon/:id", UpdateFromId);
routerPokemon.delete("/pokemon/:id", DeleteFromId);

export default routerPokemon;