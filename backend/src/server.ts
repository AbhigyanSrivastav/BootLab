import express from "express";
import dotenv from "dotenv";
import imageRoutes from "./routes/imageRoutes";
import { insertPorts } from "./Services/portManager";
import { startCleanup } from "./Jobs/cleanup";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", imageRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(insertPorts(8000,9000));
  console.log(startCleanup())
  console.log(`Server running at http://localhost:${PORT}`);
});
