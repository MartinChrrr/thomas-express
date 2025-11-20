import { Request, Response } from "express";
import AttackModel from "../models/attack"




export async function Create(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const type = req.body.type;
        const power = req.body.power;
        const accuracy = req.body.accuracy;
        const description = req.body.description;
        const newAttack = await AttackModel.create({name, type, power});
        res.status(201).json(newAttack);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function ReadFromId(req: Request, res: Response) {
    try {
        const attack = await AttackModel.findById(req.params.id)
        .populate("type");
        res.status(200).json(attack);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
  

}

export async function ReadAll(req: Request, res: Response) {
    try {
        const attacks = await AttackModel.find()
        .populate("type");
        res.status(200).json(attacks);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function UpdateFromId(req: Request, res: Response) {
    try {
        const type = await AttackModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).json(type);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}




export async function DeleteFromId(req: Request, res: Response) {
    try {
        const attack = await AttackModel.findByIdAndDelete(req.params.id);
        res.status(204).json(attack);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}