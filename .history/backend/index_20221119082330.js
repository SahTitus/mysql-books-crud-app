import express from 'express';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user:''
})




app.listen(8000, ()=>{
    console.log('Connected 😁😁')
})