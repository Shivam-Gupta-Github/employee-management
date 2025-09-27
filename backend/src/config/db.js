import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to database
const dbPath = path.resolve(__dirname, "../../employee.db");

// Open connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("DB Connection error:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create table if it doesn’t exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      position TEXT NOT NULL
    )
  `);
});

export default db;
