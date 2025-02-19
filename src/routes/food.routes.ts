import { Router } from "express";
import { getFoods } from "../controllers/food.controller";

const userRoute = Router();

userRoute.get("/foods", getFoods);

export default userRoute;
