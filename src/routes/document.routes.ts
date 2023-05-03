import { Router } from "express";

export const documentRoutes = Router();

documentRoutes.get('/', (req,res) => {
    return res.json('document')
})