import book from "../models/book.js";

class BookController {
    static async getBooks(req,res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
            
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to get the books`});
        };
    };

    static async postBook(req,res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({message: "successfully created", book: newBook});
        } catch (error) {
            res.status(500).json({message: `${error.message}-Server failed posting the book`});
        };
    };
};

export default BookController;