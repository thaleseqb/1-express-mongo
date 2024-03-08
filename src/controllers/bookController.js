import { author } from "../models/author.js";
import book from "../models/book.js";

class BookController {
    static async getBooks(req, res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
            
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to get the book list.`});
        };
    };

    static async getBookById(req, res) {
        try {
            const varBook = await book.findById(req.params.id);
            res.status(200).json(varBook);
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to get the book.`});
        };
    };

    static async postBook(req, res) {
        const newBook = req.body;

        try {
            const foundAuthor = await author.findById(newBook.author);
            const completeBook = {...newBook, author: {...foundAuthor._doc}};
            const createdBook = await book.create(completeBook)
            res.status(201).json({message: "successfully created", book: newBook});
        } catch (error) {
            res.status(500).json({message: `${error.message}-Server failed posting the book.`});
        };
    };

    static async putNewBook(req, res) {
        try {
            const idBook = req.params.id;
            await book.findByIdAndUpdate(idBook, req.body);
            res.status(200).json({message: "book updated"});
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to update the information.`});
        };
    };

    static async deleteBook(req, res) {
        try {
            const idBook = req.params.id;
            await book.findByIdAndDelete(idBook);
            res.status(200).json({message: "book deleted"});
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to delete the book.`});
        };
    };

    static async searchPubComp(req, res){
        const pubCompany = req.query.pubComp
        try {
            const pubCompBook = await book.find({pubComp: pubCompany})
            res.status(200).json(pubCompBook)
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to search for ${req.params.pubComp}`});
        }
    };
};

export default BookController;