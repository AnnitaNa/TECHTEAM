
import { AdminService } from "admin/services/admin.service"
import {Request, Response} from "express"

const adminService = new AdminService()

export class AdminController {
    async create(req: Request, res: Response) {
        const admin = await adminService.create({...req.body})
        return res.json(admin)
    }
}