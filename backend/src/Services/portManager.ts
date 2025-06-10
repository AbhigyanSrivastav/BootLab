import redisClient from "./redis";

export async function insertPorts(
  from: number,
  to: number
): Promise<{ message: string }> {
  const len = await redisClient.scard("available_ports");
  if (len == 0) {
    // one-time init script
    for (let p = from; p <= to; p++) {
      await redisClient.sadd("available_ports", p);
    }
    return { message: "Succesfully Added" };
  }
  return { message: "Not added! Ports already available" };
}

export async function getAvailablePort(): Promise<number | null> {
  const port = await redisClient.spop("available_ports");
  return port ? parseInt(port) : null;
}

export async function returnPort(port: number) {
  await redisClient.sadd("available_ports", port);
}
