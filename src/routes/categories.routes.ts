import { Router } from "express";
import { getCategories } from "../controllers/categories.controller";

const userRoute = Router();

userRoute.get("/categories", getCategories);

export default userRoute;
