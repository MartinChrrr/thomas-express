import {Create, ReadAll, ReadFromId, UpdateFromId ,DeleteFromId} from "../controllers/typeController";
import { Router } from "express";

const routeType = Router();


routeType.get("/type", ReadAll );
routeType.post("/type", Create );
routeType.get("/type/:id", ReadFromId );
routeType.put("/type/:id", UpdateFromId);
routeType.delete("/type/:id", DeleteFromId);

export default routeType;