import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { clientRoutes } from "./client.routes";
import { documentRoutes } from "./document.routes";

export const routes = Router();

routes.use('/admin', adminRoutes)
routes.use('/client', clientRoutes)
routes.use('/document', documentRoutes)