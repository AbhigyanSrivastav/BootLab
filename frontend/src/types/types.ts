export interface Options {
  id: string;
  name: string;
  description: string;
}
export type ImageType = "browser" | "os";

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

export interface ApiResponse<T = undefined> {
  status: number;
  success: boolean;
  data?: {
    data?: T;
    message?: string;
    error?: boolean;
  };
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface PlatformSelectionProps {
  options: ImageGroup[];
  loading: boolean;
  error: string | null;
  onBack: () => void;
}

export interface PlatformSectionProps {
  title: string;
  description: string;
  platforms: ImageOption[];
  selectedPlatform: ImageOption | null;
  onSelect: (platform: ImageOption) => void;
}

export interface useOptionsResponse {
  options: ImageGroup[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}
export type LaunchState = "details" | "launching" | "ready"

// export interface LaunchModalProps {
//   platform: ImageOption
//   isOpen: boolean
//   onClose: () => void
// }

export interface HeroSectionProps {
  onLaunchPlatform: () => void
}
export interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
  showRetry?: boolean
  showHome?: boolean
  onRetry?: () => void
  onHome?: () => void
  autoClose?: number
}
export interface LaunchButtonProps {
  selected: string | null
  onLaunch: () => void
}
export interface LaunchModalProps {
  platform: ImageOption;
  isOpen: boolean;
  onClose: () => void;
  onLaunch: () => void;
  progress: number;
  launchState: "details" | "launching" | "ready";
  platformUrl: string;
}

