import { Router } from "express";

import{
    createRoupa,
    getRoupas,
    getRoupaById,
    updateRoupa,
    deleteRoupa,
    } from "../controllers/roupas.controller.js";

const roupaRouter = Router();

roupaRouter.get("/roupas", getRoupas);
roupaRouter.get("/roupas:id", getRoupaById);
roupaRouter.post("/roupas", createRoupa);
roupaRouter.put("/roupas:id", updateRoupa);
roupaRouter.delete("/roupas:id", deleteRoupa);

