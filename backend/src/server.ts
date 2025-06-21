import dotenv from "dotenv";
dotenv.config();
import express from "express";
import imageRoutes from "./routes/imageRoutes";
import { insertPorts } from "./Services/portManager";
import { startCleanup } from "./Jobs/cleanup";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", imageRoutes);

const PORT = Number(process.env.PORT) || 5000;
const START = Number(process.env.PORT_RANGE_START) || 8000;
const END = Number(process.env.PORT_RANGE_END) || 9000;

(async () => {
  try {
    console.log(insertPorts(START, END));
    console.log(startCleanup());
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running at http://0.0.0.0:${PORT}`);
    });
  } catch (err) {
    console.error("Startup error:", err);
    process.exit(1);
  }
})();
