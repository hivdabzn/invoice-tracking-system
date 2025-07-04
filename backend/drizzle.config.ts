export default {
  schema: `./src/db/schema.ts`,
  out: `./drizzle`,
  driver: `pg`,
  dialect: "postgresql",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
};
