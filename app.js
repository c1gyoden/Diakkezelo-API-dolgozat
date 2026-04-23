import express from "express";
import studentsRoutes from "./routes/studentsRoutes.js"

const port = 3300;
const app = express();
app.use(express.json());

app.use("/students", studentsRoutes)

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
