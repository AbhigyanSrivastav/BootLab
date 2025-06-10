import Docker from "dockerode";

const docker = new Docker();

export async function launchContainer(imageName: string, port: number) {
  try {
    const container = await docker.createContainer({
      Image: imageName,
      Env: [
        "VNC_PW=password",
      ],
      HostConfig: {
        PortBindings: {
          "6901/tcp": [{ HostPort: port.toString() }],
        },
        ShmSize: 512 * 1024 * 1024,
        AutoRemove: true,
      },
    });

    await container.start();
    return container;
  } catch (error) {
    console.error("Failed to launch container:", error);
    throw error;
  }
}

export async function stopContainer(containerId: string) {
  try {
    const container = docker.getContainer(containerId);
    await container.stop();
  } catch (e) {
    console.warn(`Error removing container ${containerId}`, e);
  }
}
