import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL); // server env, not NEXT_PUBLIC

export const db = drizzle(sql);