import { Router } from "express";
import {roupasRouter} from "../controllers/roupas.controller.js";

const router = Router();

Router.get("/",(res, req) =>{
  res.status(200).send({message: "Servidor OK"})
})

Router.use("/roupas",roupasRouter);


export default  router ;