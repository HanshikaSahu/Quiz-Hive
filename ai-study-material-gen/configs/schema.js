import { pgTable, serial, text, boolean, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  isMember: boolean("is_member").default(false),
});
