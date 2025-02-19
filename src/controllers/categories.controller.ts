import { Request, Response } from "express";
import { categories } from "../database/categories.db";

export const getCategories = (req: Request, res: Response) => {
  res.json(categories);
};
