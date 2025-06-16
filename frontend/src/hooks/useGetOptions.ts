import { fetchOptions } from "@/api";
import type { ApiResponse, ImageGroup, useOptionsResponse } from "@/types/types";
import { useEffect, useState } from "react";

export const useGetOptions = (getOptions: boolean) : useOptionsResponse => {
  const [options, setOptions] = useState<ImageGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res: ApiResponse<ImageGroup[]> = await fetchOptions();
      if (res.success && res.data?.data) {
        setOptions(res.data.data);
      } else {
        setError(
          res.data?.message ?? "An error occured while fetching options!"
        );
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!getOptions) return;

    fetchData();
  }, [getOptions]);

  return { options, loading, error, refetch: fetchData };
};
