import express from 'express';
import connectToDataBase from './config/dbConcect.js';
import book from './models/book.js'

const connection = await connectToDataBase();

connection.on('error', (error)=>{
    console.error("CONNECTION ERROR", error);
});

connection.once("open", ()=>{
    console.log("connection established successfully")
})

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).send('Curso de Node.js');
});

app.get("/livros", async (req, res) => {
    const bookList = await book.find({});
    res.status(200).json(bookList);
});

app.post("/livros", async (req, res)=>{
    const bookList = await book.find({});
    bookList.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
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