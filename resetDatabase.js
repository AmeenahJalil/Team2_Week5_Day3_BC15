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
    "DROP TABLE author_book;"
);

await pool.query(
  "DROP TABLE authors;"
);

await pool.query(
  "DROP TABLE books;"
);

// Send a query - SELECT * FROM books;
await pool.query(
    "CREATE TABLE authors (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL);"
  );
  
  await pool.query(
    "CREATE TABLE books (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title VARCHAR(255) NOT NULL, published_date DATE);"
  );
  
  await pool.query(
    "CREATE TABLE author_book (author_id INT REFERENCES authors(id), book_id INT REFERENCES books(id), PRIMARY KEY (author_id, book_id));"
  );

  // Send a query - SELECT * FROM books;
await pool.query(
    "INSERT INTO authors (first_name, last_name) VALUES ('George', 'Orwell'), ('J.K.', 'Rowling'), ('J.R.R.', 'Tolkien'), ('Agatha', 'Christie'), ('Stephen', 'King'), ('Neil', 'Gaiman');");
  
  await pool.query(
    "INSERT INTO books (title, published_date) VALUES ('1984', '1949-06-08'), ('Harry Potter and the Philosopher''s Stone', '1997-06-26'), ('The Fellowship of the Ring', '1954-07-29'), ('The Two Towers', '1954-11-11'), ('The Return of the King', '1955-10-20'), ('And Then There Were None', '1939-11-06'), ('The Shining', '1977-01-28'), ('It', '1986-09-15'), ('Good Omens', '1990-05-01'), ('Animal Farm', '1945-08-17');")
  
  await pool.query(
    "INSERT INTO author_book (author_id, book_id) VALUES (1, 1), (1, 10), (2, 2), (3, 3), (3, 4), (3, 5), (4, 6), (5, 7), (5,8), (6, 9);")
  

console.log("success");
// Close the connection
await pool.end();


