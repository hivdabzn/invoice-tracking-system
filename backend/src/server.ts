import { Hono } from "hono";
import invoicesRoute from "./routes/invoices";
import "dotenv/config";

const app = new Hono();

app.route("/invoices", invoicesRoute);

app.get("/", (c) => c.text("Invoice API Ready"));

export default app;
