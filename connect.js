// Import the pg package
import pg from "pg";

// Get the connection string
const connectionString = process.env.DATABASE_URL;

// Create a new pool instance
const pool = new pg.Pool({
  // Remember to pass in your connection details
  connectionString
});
// Send a query - SELECT * FROM books;
const data = await pool.query("SELECT * FROM authors;");
const rows = data.rows;
console.log("success");
// Close the connection
await pool.end();