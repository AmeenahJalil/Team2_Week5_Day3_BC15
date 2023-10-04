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
  "CREATE TABLE authors2 (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL);"
);

await pool.query(
  "CREATE TABLE books2 (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title VARCHAR(255) NOT NULL, published_date DATE);"
);

await pool.query(
  "CREATE TABLE author_book2 (author_id INT REFERENCES authors(id), book_id INT REFERENCES books(id), PRIMARY KEY (author_id, book_id));"
);
console.log("success");
// Close the connection
await pool.end();
