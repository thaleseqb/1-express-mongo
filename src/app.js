import express from 'express';
import connectToDataBase from './config/dbConcect.js';
import routes from './routes/index.js';

const connection = await connectToDataBase();

connection.on('error', (error)=>{
    console.error("CONNECTION ERROR", error);
});

connection.once("open", ()=>{
    console.log("connection established successfully")
})

const app = express();
routes(app);

export default app;