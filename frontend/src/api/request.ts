import type { ApiResponse, ImageGroup } from '@/types/types';
import httpClient from './httpClient';

export const fetchOptions = async():Promise<ApiResponse<ImageGroup[]>>=>{
    const res = await httpClient.get('/images');
    return res.data;
}

export const launchPlatform = async (id: string): Promise<ApiResponse<string | undefined>> => {
  const res = await httpClient.post("/launch", { id });
  return res.data;
};
