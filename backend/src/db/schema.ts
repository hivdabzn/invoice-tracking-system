import {
  pgTable,
  uuid,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow(),
  customerNo: integer("customer_no"),
  description: varchar("description", { length: 255 }),
});
