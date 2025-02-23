import { Router } from "express";
import { getFoods } from "../controllers/food.controller";

const foodRoute = Router();

foodRoute.get("/foods", getFoods);

export default foodRoute;
