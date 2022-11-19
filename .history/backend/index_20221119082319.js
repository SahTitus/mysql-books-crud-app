import express from 'express';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
})




app.listen(8000, ()=>{
    console.log('Connected 😁😁')
})