import express from "express";
import cors from "cors";
import userRoute from "./routes/categories.routes";
import foodRoute from "./routes/food.routes";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", foodRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
