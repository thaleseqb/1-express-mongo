import book from "../models/book.js";

class BookController {
    static async getBooks(req,res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
            
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to get the book list.`});
        };
    };

    static async getBookById(req,res) {
        try {
            const varBook = await book.findById(req.params.id);
            res.status(200).json(varBook);
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to get the book.`});
        };
    };

    static async postBook(req,res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({message: "successfully created", book: newBook});
        } catch (error) {
            res.status(500).json({message: `${error.message}-Server failed posting the book.`});
        };
    };

    static async putNewBook(req,res) {
        try {
            const idBook = await book.findById(req.params.id);
            await book.findByIdAndUpdate(idBook, req.body);
            res.status(200).json({message: "book updated"});
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to update the information.`});
        };
    };

    static async deleteBook(req,res) {
        try {
            const idBook = await req.params.id;
            await book.findByIdAndDelete(idBook);
            res.status(200).json({message: "book deleted"});
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to delete the book.`});
        };
    };
};

export default BookController;