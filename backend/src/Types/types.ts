export interface LaunchRequest {
  type: string;
  name: string;
}

export interface ApiResponse {
  status: number;
  success: boolean;
  data?: {
    data?: string
    message?: string;
    error?: boolean;
  };
}

export interface ImageInfo {
  name: string;
  image: string;
  command: string;
}

export type Browser = "chrome" | "firefox" | "edge";
export type OS = "ubuntu" | "alpine";
