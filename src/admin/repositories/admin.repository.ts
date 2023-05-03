import { adminModel } from "admin/dao/admin.schema";
import { adminDto } from "admin/dto/admin.dto";


export class AdminRepository {
    async create(fields: adminDto) {
        const admin = await adminModel.create(fields)
        return admin
    }
}