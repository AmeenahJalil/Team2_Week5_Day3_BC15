// Import the pg package
import pg from "pg";

// Get the connection string
const connectionString = process.env.DATABASE_URL;

// Create a new pool instance
const pool = new pg.Pool({
  // Remember to pass in your connection details
  connectionString,
});
// Send a query - SELECT * FROM books;
await pool.query(
  "DROP TABLE authors;"
);

await pool.query(
  "DROP TABLE books;"
);

await pool.query(
  "DROP TABLE author_book;"
);
console.log("success");
// Close the connection
await pool.end();
