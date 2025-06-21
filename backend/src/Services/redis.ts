import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  throw new Error("REDIS_URL environment variable is not set");
}

const redisClient = new Redis(redisUrl);

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});

export default redisClient;