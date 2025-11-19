import {Create, ReadAll, ReadFromId, UpdateFromId ,DeleteFromId} from "../controllers/itemController";
import { Router } from "express";

const routerItem = Router();


routerItem.get("/item", ReadAll );
routerItem.post("/item", Create );
routerItem.get("/item/:id", ReadFromId );
routerItem.put("/item/:id", UpdateFromId);
routerItem.delete("/item/:id", DeleteFromId);

export default routerItem;