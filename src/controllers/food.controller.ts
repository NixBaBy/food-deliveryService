import { Request, Response } from "express";
import { foods } from "../database/food.db";

export const getFoods = (req: Request, res: Response) => {
  const { id } = req.params;
  const filtered = foods.filter((food) => food.category.toString() == id);
  res.json(filtered);
};
