import { createClient } from "redis";

const redisClient = createClient({
  socket: {
    host: "redis",
    port: 6379,
  },
});

redisClient
  .connect()
  .then(() => console.log("Connected to Redis"))
  .catch((err) => console.error("Redis connection error:", err));

export default redisClient;
