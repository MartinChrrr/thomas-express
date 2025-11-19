import {Create, ReadAll, ReadFromId, UpdateFromId ,DeleteFromId} from "../controllers/trainerController";
import { Router } from "express";

const routerTrainer = Router();


routerTrainer.get("/trainer", ReadAll );
routerTrainer.post("/trainer", Create );
routerTrainer.get("/trainer/:id", ReadFromId );
routerTrainer.put("/trainer/:id", UpdateFromId);
routerTrainer.delete("/trainer/:id", DeleteFromId);

export default routerTrainer;