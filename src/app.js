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

app.get("/", (req, res)=>{
    res.status(200).send('Curso de Node.js');
});


app.get("/livros/:id", (req, res)=>{
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});

app.put("/livros/:id", (req,res) => {
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/livros/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send('deleted book');
});

export default app;