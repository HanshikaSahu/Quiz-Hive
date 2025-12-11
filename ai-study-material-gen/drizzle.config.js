import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_wh5tRqunWm9J@ep-nameless-sky-a17pda8j-pooler.ap-southeast-1.aws.neon.tech/AI-study-material-gen?sslmode=require&channel_binding=require",
  }
});
