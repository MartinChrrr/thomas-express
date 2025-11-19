import {Create, ReadAll, ReadFromId, UpdateFromId ,DeleteFromId} from "../controllers/arenaController";
import { Router } from "express";

const routerArena = Router();


routerArena.get("/arena", ReadAll );
routerArena.post("/arena", Create );
routerArena.get("/arena/:id", ReadFromId );
routerArena.put("/arena/:id", UpdateFromId);
routerArena.delete("/arena/:id", DeleteFromId);

export default routerArena;
