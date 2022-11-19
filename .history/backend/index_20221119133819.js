import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

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
  const q = "SELECT * FROM books ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`, `price`, `cover`) VALUES(?)";

  const body = req.body;

  const values = [body.title, body.desc, body.price, body.cover];

  db.query(q, [values], (err, data) => {
    console.log(data);
    if (err) return res.json(err);
    return res.json("Book has been created successfully 😁👍");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";


    db.query(q, [bookId], (err, data) => {
      if (err) return res.json(err, 'the error');
      return res.json("Book has been created successfully 😁👍");
    });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?,`desc` = ?,`price`=?,`cover`=? WHERE id = ?";

  
  const body = req.body;

  const values = [body.title, body.desc, body.price, body.cover];

    db.query(q, [...values, bookId], (err, data) => {
      if (err) return res.send(err, 'the error');
      return res.json("Book has been updated successfully 😁👍");
    });
});

app.listen(8000, () => {
  console.log("Connected 😁😁");
});
