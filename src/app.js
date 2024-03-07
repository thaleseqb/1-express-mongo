import express from 'express';
import connectToDataBase from './config/dbConcect.js';

const connection = await connectToDataBase();

connection.on('error', (error)=>{
    console.error("CONNECTION ERROR", error);
});

connection.once("open", ()=>{
    console.log("connection established successfully")
})

const app = express();
app.use(express.json());

const books = [
    {
        id:1,
        title: "Lords of the ring"
    },
    {
        id:2,
        title: "The Hobbit"
    }
];

function searchBook(id){
    return books.findIndex((book) => {
        return book.id === Number(id)
    });
};

app.get("/", (req, res)=>{
    res.status(200).send('Curso de Node.js');
});

app.get("/livros", (req, res) => {
    res.status(200).json(books);
});

app.post("/livros", (req, res)=>{
    books.push(req.body);
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