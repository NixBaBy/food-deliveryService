import { Request, Response } from "express";
import { foods } from "../database/food.db";

export const getFoods = (req: Request, res: Response) => {
  res.json(foods);
};
