import { Browser, ImageInfo, OS } from "../Types/types";

export const browserImages: Record<string, ImageInfo> = {
  chrome: {
    name: "Google Chrome",
    image: "kasmweb/chrome:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/chrome:1.17.0",
  },
  firefox: {
    name: "Mozilla Firefox",
    image: "kasmweb/firefox:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/firefox:1.17.0",
  },
  edge: {
    name: "Microsoft Edge",
    image: "kasmweb/edge:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/edge:1.17.0",
  },
};

export const osImages: Record<string, ImageInfo> = {
  ubuntu: {
    name: "Ubuntu Desktop",
    image: "kasmweb/ubuntu-jammy-desktop:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/ubuntu-jammy-desktop:1.17.0",
  },
  alpine: {
    name: "Alpine Linux Desktop",
    image: "kasmweb/alpine-321-desktop:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/alpine-321-desktop:1.17.0",
  },
};
