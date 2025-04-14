// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
require("dotenv").config();
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_database",
  port: 3306,
});

connection.query = util.promisify(connection.query);

async function initializeDatabase() {
  await connection.query("CREATE DATABASE IF NOT EXISTS my_database");
  console.log("Database created or already exists");

  await connection.query("USE my_database");

  await connection.query(
    "CREATE TABLE IF NOT EXISTS my_table (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))"
  );
  console.log("Table created or already exists");
}

async function insertRecord(name) {
  await connection.query("INSERT INTO my_table (name) VALUES (?)", [name]);
  console.log("Record inserted: " + name);
}

async function updateRecord(id, newName) {
  await connection.query("UPDATE my_table SET name = ? WHERE id = ?", [
    newName,
    id,
  ]);
  console.log("Record updated with ID " + id + " to " + newName);
}

async function deleteRecord(id) {
  await connection.query("DELETE FROM my_table WHERE id = ?", [id]);
  console.log("Record with ID " + id + " deleted");
}

async function selectAllRecords() {
  const records = await connection.query("SELECT * FROM my_table");
  console.log("All Records:", records);
}

async function selectUniqueRecord(id) {
  const record = await connection.query("SELECT * FROM my_table WHERE id = ?", [
    id,
  ]);
  console.log("Unique Record with ID " + id + ":", record[0] || "Not Found");
}

async function dropTable() {
  await connection.query("DROP TABLE IF EXISTS my_table");
  console.log("Table dropped");
}

connection.connect(async (err) => {
  if (err) {
    console.error("Error connecting to MySQL server: " + err.stack);
    return;
  }
  console.log("Connected to MySQL server as ID " + connection.threadId);

  try {
    await initializeDatabase();

    await insertRecord("John Doe");
    await updateRecord(1, "Devendra Vashi");
    await selectAllRecords();

    await insertRecord("Jane Doe");
    await selectAllRecords();
    // await dropTable();
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    connection.end((err) => {
      if (err) {
        console.error("Error closing connection: " + err.stack);
        return;
      }
      console.log("Connection closed");
    });
  }
});
`;
  res.json({ code: codeString });
});

module.exports = router;
