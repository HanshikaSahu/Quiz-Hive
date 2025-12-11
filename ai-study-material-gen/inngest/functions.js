// lib/inngest-functions.js
import { USER_TABLE } from "../configs/schema";
import { inngest } from "./client"; // keep this if your client file exports inngest
import { db } from "../configs/db";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const {user} = event.data;
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    const { email, name } = event.data ?? {};

    const result = await step.run("Check User and create New if Not in DB", async () => {
      if (!email) {
        return { created: false, reason: "missing email" };
      }

      const existing = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.email, email));

      if (!existing || existing.length === 0) {
        await db.insert(USER_TABLE).values({
          name: name ?? null,
          email,
        });
        return { created: true };
      }

      return { created: false, reason: "already exists" };
    });

    return { status: "success", detail: result };
  }
);
