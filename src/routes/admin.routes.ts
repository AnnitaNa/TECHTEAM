import { AdminController } from "admin/controllers/admin.controller";
import { Router } from "express";

export const adminRoutes = Router();

const adminController = new AdminController()

adminRoutes.get('/', (req,res) => {
    return res.json('admin')
})
adminRoutes.post('/', adminController.create)