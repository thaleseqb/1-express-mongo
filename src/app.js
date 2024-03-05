import express from 'express';

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

app.get("/", (req,res)=>{
    res.status(200).send('Curso de Node.js');
});

app.get("/livros", (req,res) => {
    res.status(200).json(books);
});

app.post("/livros", (req,res)=>{
    books.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
});

export default app;