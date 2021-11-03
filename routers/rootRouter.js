import express from "express";
import { home } from "../controllers/Controller";


const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;