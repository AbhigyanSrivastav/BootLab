
import { Request, Response } from "express";
import { ApiResponse, ImageGroup, LaunchRequest } from "../Types/types";
import { imageConfigs } from "../Docker/dockerImages";
import { getAvailablePort } from "../Services/portManager";
import { launchContainer } from "../Docker/dockerManager";
import redisClient from "../Services/redis";
import { imageGroups } from "../data/constants";

export const getImageOptions = (
  _req: Request,
  res: Response<ApiResponse<ImageGroup[]>>
) => {
  const response: ApiResponse<ImageGroup[]> = {
    status: 200,
    success: true,
    data: {
      data: imageGroups,
      message: "Fetched image options successfully.",
      error: false,
    },
  };

res.status(200).json(response);
 return 
};

export const launchImage = async (
  req: Request<object, object, LaunchRequest>,
  res: Response<ApiResponse<string>>
) => {
  try {
    const { id } = req.body;

    const config = imageConfigs[id];
    if (!config) {
      const response: ApiResponse<string> = {
        status: 400,
        success: false,
        data: {
          data: undefined,
          message: "Invalid selection.",
          error: true,
        },
      };
      res.status(400).send(response);
      return 
    }

    const port = await getAvailablePort();
    if (!port) {
      const response: ApiResponse<string> = {
        status: 400,
        success: false,
        data: {
          data: undefined,
          message: "No available ports.",
          error: true,
        },
      };
      res.status(400).send(response);
      return 
    }

    const container = await launchContainer(config.image, port);

    await redisClient.set(
      `container:${container.id}`,
      JSON.stringify({
        id: container.id,
        port,
        expiresAt: Date.now() + 5 * 60_000,
      })
    );

    await redisClient.zadd(
      "containers_by_expiry",
      Date.now() + 5 * 60_000,
      container.id
    );

    const response: ApiResponse<string> = {
      status: 200,
      success: true,
      data: {
        data: `https://localhost:${port}`,
        message: "Launched successfully.",
        error: false,
      },
    };

    res.status(200).send(response);
    return 
  } catch (e) {
    const response: ApiResponse<string> = {
      status: 500,
      success: false,
      data: {
        data: undefined,
        message: `Internal Server Error: ${e instanceof Error ? e.message : "Unknown"}`,
        error: true,
      },
    };
    res.status(500).send(response);
    return 
  }
};




