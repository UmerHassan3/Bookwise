import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(4, "60 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export async function handler() {
  const identifier = "api";

  const { success } = await ratelimit.limit(identifier);

  if (!success) {
    return "Unable to process at this time";
  }

  // Example function
  function doExpensiveCalculation() {
    return "Expensive work done";
  }

  const result = doExpensiveCalculation();

  return "Here you go! " + result;
}