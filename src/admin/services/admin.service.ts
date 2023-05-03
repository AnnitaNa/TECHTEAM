import { adminDto } from "admin/dto/admin.dto"
import { AdminRepository } from "admin/repositories/admin.repository"

const adminRepository = new AdminRepository()

export class AdminService {
    async create(fields: adminDto) {
        const admin = await adminRepository.create(fields)
        return admin
    }
}