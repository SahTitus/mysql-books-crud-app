import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

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
const q = "INSERT INTO books (`title`,`desc`, `price`, `cover`) VALUES(?)"

const body = req.body

const values =[
    body.title,
    body.desc,
    body.price,
    body.cover

]

db.query(q, [values], (err, data) => {
  console.log(data)
    if(err)return res.json(err) 
    return res.json("Book has been created successfully 😁👍")
})
});

app.delete("/books/:id", (err,res) =>{
  const bookId = res.params.id;
  const q = "DELETE FROM books WHERE id="
})

app.listen(8000, () => {
  console.log("Connected 😁😁");
});
