import { launchPlatform } from "@/api";
import type { ApiResponse } from "@/types/types";
import { useState } from "react";

export const useLaunch = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const launch = async (id: string): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const res: ApiResponse<string | undefined> = await launchPlatform(id);
      const url = res.data?.data;

      if (res.success && url) {
        setResponse(url);
        return url;
      } else {
        const message =
        res.data?.message ?? "An error occurred while launching!";
        setError(message);
        return null;
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  const reset = () => {
    setResponse(null);
    setLoading(false);
    setError(null);
  };

  return { launch, loading, error, response, reset };
};
