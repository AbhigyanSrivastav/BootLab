import express, { Request, Response } from "express";
import { ApiResponse, LaunchRequest } from "./Types/types";
import dotenv from "dotenv";
import { browserImages, osImages } from "./Docker/dockerImages";
import { getAvailablePort, insertPorts } from "./Services/portManager";
import { launchContainer } from "./Docker/dockerManager";
import redisClient from "./Services/redis";
import { startCleanup } from "./Jobs/cleanup";

const app = express();
dotenv.config();

const PORT = 3000;

app.use(express.json());

app.post(
  "/launch",
  async (
    req: Request<object, object, LaunchRequest>,
    res: Response<ApiResponse>
  ) => {
    try {
      const { type, name } = req.body;

      const imageSet = type === "browser" ? browserImages : osImages;

      if(type == "browser"){
      if (!(name in imageSet)) {
        const response: ApiResponse = {
          status: 400,
          success: true,
          data: {
            message: "Invalid Name.",
            error: true,
          },
        };
        res.status(400).send(response);
        return;
      }
    }
    
      const port = await getAvailablePort();
      if (!port) {
        const response: ApiResponse = {
          status: 400,
          success: true,
          data: {
            message: "No Ports Available!",
            error: true,
          },
        };
        res.status(400).send(response);
        return;
      }
      
      const container = await launchContainer(imageSet[name].image, port);
      console.log(container.id)
      await redisClient.set(
        `container:${container.id}`,
        JSON.stringify({
          id: container.id,
          port: port,
          expiresAt: Date.now() + 5 * 60_000,
        })
      );

    await redisClient.zadd("containers_by_expiry", Date.now() + 2 * 60_000, container.id);

      const response: ApiResponse = {
        status: 200,
        success: true,
        data: {
          data: `https://localhost:${port}`,
          message: "Launched Succesfully!",
          error: false,
        },
      };
      res.status(200).send(response);
      return;
    } catch (e) {
      res.status(500).json({
        status: 500,
        success: false,
        data: {
          message: `Internal Server Error ${e}`,
          error: true,
        },
      });
      return;
    }
  }
);
app.listen(PORT, () => {
  console.log(insertPorts(8000,9000));
  console.log(startCleanup())
  console.log(`Server started at http://localhost:${PORT}`);
});

// todo fix kasam image names