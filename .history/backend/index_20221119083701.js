import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sah@mysql10",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("Mysql Server");
});

app.get("/books", (req, res) => {
const 
});

app.listen(8000, () => {
  console.log("Connected 😁😁");
});
