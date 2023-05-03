import { Router } from "express";

export const clientRoutes = Router();

clientRoutes.get('/', (req,res) => {
    return res.json('client')
})