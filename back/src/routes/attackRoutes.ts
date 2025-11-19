import {Create, ReadAll, ReadFromId, UpdateFromId ,DeleteFromId} from "../controllers/attackController";
import { Router } from "express";

const routerAttack = Router();


routerAttack.get("/attack", ReadAll );
routerAttack.post("/attack", Create );
routerAttack.get("/attack/:id", ReadFromId );
routerAttack.put("/attack/:id", UpdateFromId);
routerAttack.delete("/attack/:id", DeleteFromId);

export default routerAttack;
