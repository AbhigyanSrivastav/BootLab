import { ImageInfo } from "../Types/types";

export const imageConfigs: Record<string, ImageInfo> = {
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
  ubuntu: {
    name: "Ubuntu Desktop",
    image: "kasmweb/ubuntu-noble-dind:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/ubuntu-noble-dind:1.17.0",
  },
  alpine: {
    name: "Alpine Linux Desktop",
    image: "kasmweb/alpine-321-desktop:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/alpine-321-desktop:1.17.0",
  },
  vscode: {
    name: "VS Code",
    image: "kasmweb/vs-code:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/vs-code:1.17.0",
  },
  doom: {
    name: "DOOM",
    image: "kasmweb/doom:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/doom:1.17.0",
  },
  terminal: {
    name: "Terminal",
    image: "kasmweb/terminal:1.17.0",
    command:
      "sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/terminal:1.17.0",
  },
};

