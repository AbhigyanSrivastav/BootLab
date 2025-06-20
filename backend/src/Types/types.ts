export interface LaunchRequest {
  id: string
}

export interface ApiResponse<T = undefined> {
  status: number;
  success: boolean;
  data?: {
    data?: T
    message?: string;
    error?: boolean;
  };
}

export interface ImageInfo {
  name: string;
  image: string;
  command: string;
}
export interface Options {
  id: string;
  name: string;
  description: string;
}


export type Browser = "chrome" | "firefox" | "edge";
export type OS = "ubuntu" | "alpine";

export type ImageType = "browser" | "os" | string;

export interface ImageOption {
  id: string;
  name: string;
  description: string;
  type: ImageType;
}

export interface ImageGroup {
  type: ImageType;
  label: string;
  items: ImageOption[];
}
