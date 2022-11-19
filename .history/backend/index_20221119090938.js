import express from "express";
import mysql from "mysql2";

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
const q = "SELECT * FROM books "
db.query(q, (err, data) => {
    if(err)return res.json(err) 
    return res.json(data)
})
});

app.post("/books", (req, res) => {
const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?)"

const values =[
    "title of the book",
    "desc of the book",
    "cover pic of the book",
]

db.query(q, [values], (err, data) => {
    if(err)return res.json(err) 
    return res.json("")
})
});

app.listen(8000, () => {
  console.log("Connected 😁😁");
});
