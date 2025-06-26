import { Hono } from "hono";
import { db } from "../db";
import { invoices } from "../db/schema";
import { eq } from "drizzle-orm";

const router = new Hono();

router.get("/", async (c) => {
  const data = await db.select().from(invoices);
  return c.json(data);
});

router.post("/", async (c) => {
  const body = await c.req.json();
  const result = await db.insert(invoices).values(body).returning();
  return c.json(result[0]);
});
export default router;
