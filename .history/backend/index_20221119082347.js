import express from 'express';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Sah@mysql'
})




app.listen(8000, ()=>{
    console.log('Connected 😁😁')
})