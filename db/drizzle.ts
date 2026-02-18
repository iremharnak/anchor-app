import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" }); // or .env.local

const connectionString = process.env.DATABASE_URL;

// drizzle-orm/neon-http expects a Neon "sql" query function, not the connection string.
// When DATABASE_URL isn't set (frontend-only mode), we provide a function that throws if used.
const sql =
  connectionString
    ? neon(connectionString)
    : ((() => {
        throw new Error(
          "DATABASE_URL is not set. Configure it to enable database features.",
        );
      }) as unknown as ReturnType<typeof neon>);

export const db = drizzle(sql);
