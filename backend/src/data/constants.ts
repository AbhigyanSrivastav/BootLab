import { ImageGroup } from "../Types/types";

export const imageGroups:ImageGroup[] = [
  {
    type: "browser",
    label: "Browsers",
    items: [
      {
        id: "chrome",
        name: "Google Chrome",
        description: "Fast and secure",
        type: "browser",
      },
      {
        id: "firefox",
        name: "Mozilla Firefox",
        description: "Privacy-focused",
        type: "browser",
      },
    ],
  },
  {
    type: "os",
    label: "Operating Systems",
    items: [
      {
        id: "ubuntu",
        name: "Ubuntu",
        description: "Linux desktop",
        type: "os",
      },
      {
        id: "alpine",
        name: "Alpine Linux",
        description: "Minimal Linux",
        type: "os",
      },
    ],
  },
];
