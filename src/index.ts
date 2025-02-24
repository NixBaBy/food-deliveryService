import express from "express";
import cors from "cors";
import userRoute from "./routes/categories.routes";
import foodRoute from "./routes/food.routes";
import { getMovies } from "./data-base/mongodb";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", foodRoute);

app.get("/movies", async (req, res) => {
  try {
    const { year, imdb } = await req.query;
    const movies = await getMovies(Number(year), Number(imdb));
    res.status(200).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
