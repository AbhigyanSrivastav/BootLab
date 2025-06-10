import redisClient from "../Services/redis";
import { returnPort } from "../Services/portManager";
import { stopContainer } from "../Docker/dockerManager";

async function runCleanup() {
  const now = Date.now();
  console.log(`[Cleanup] Starting cleanup at ${new Date(now).toISOString()}`);
  
  try {
    const expiredContainerIds = await redisClient.zrangebyscore('containers_by_expiry', 0, now);
    
    if (expiredContainerIds.length === 0) {
      console.log('[Cleanup] No expired containers found');
      return;
    }

    console.log(`[Cleanup] Found ${expiredContainerIds.length} expired containers`);

    for (const id of expiredContainerIds) {
      try {
        const data = await redisClient.get(`container:${id}`);
        if (!data) {
          console.warn(`[Cleanup] No data found for container ${id}`);
          continue;
        }

        const parseData = JSON.parse(data);
        console.log(`[Cleanup] Cleaning up container ${id} on port ${parseData.port}`);

        await stopContainer(id);
        await returnPort(parseData.port);
        await redisClient.del(`container:${id}`);
        await redisClient.zrem('containers_by_expiry', id);

        console.log(`[Cleanup] Successfully cleaned up container ${id}`);
      } catch (error) {
        console.error(`[Cleanup] Failed to cleanup container ${id}:`, error);
      }
    }
  } catch (error) {
    console.error('[Cleanup] Critical cleanup error:', error);
  }
}

export function startCleanup() {
  console.log('[Cleanup] Starting cleanup service with 60s interval');
  

  runCleanup().catch(err => console.error('[Cleanup] Initial cleanup failed:', err));
  
  
  const intervalId = setInterval(async () => {
    try {
      await runCleanup();
    } catch (err) {
      console.error('[Cleanup] Cleanup job failed:', err);
    }
  }, 60000);


  return intervalId;
}

export function stopCleanup(intervalId: NodeJS.Timeout) {
  clearInterval(intervalId);
  console.log('[Cleanup] Cleanup service stopped');
}