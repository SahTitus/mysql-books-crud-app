import express from 'express';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'password
})




app.listen(8000, ()=>{
    console.log('Connected 😁😁')
})