// app/api/check-user/route.js
import { NextResponse } from "next/server";
// route file is at: app/api/check-user/route.js
// go up to project root and import configs/db and schema
import { db } from "../../../configs/db";
import { USER_TABLE } from "../../../configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "missing email" }, { status: 400 });
    }

    // check if user exists
    const existing = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, email));

    if (!existing || existing.length === 0) {
      // insert new user
      await db.insert(USER_TABLE).values({
        name: name ?? null,
        email,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("check-user error:", err);
    return NextResponse.json({ error: err?.message ?? "server error" }, { status: 500 });
  }
}
