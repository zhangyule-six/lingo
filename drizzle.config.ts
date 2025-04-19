import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  // driver: "pglite",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  dialect: "postgresql"
} satisfies Config;
