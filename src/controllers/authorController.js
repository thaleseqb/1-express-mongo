import {author} from "../models/author.js";

class AuthorController {
    static async getAuthors(req,res) {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
            
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to get the author list.`});
        };
    };

    static async getAuthorById(req,res) {
        try {
            const varAuthor = await author.findById(req.params.id);
            res.status(200).json(varAuthor);
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to get the author.`});
        };
    };

    static async postAuthor(req,res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({message: "successfully created", author: newAuthor});
        } catch (error) {
            res.status(500).json({message: `${error.message}-Server failed posting the author.`});
        };
    };

    static async putNewAuthor(req,res) {
        try {
            const idAuthor = req.params.id;
            await author.findByIdAndUpdate(idAuthor, req.body);
            res.status(200).json({message: "author updated"});
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to update the information.`});
        };
    };

    static async deleteAuthor(req,res) {
        try {
            const idAuthor = req.params.id;
            await author.findByIdAndDelete(idAuthor);
            res.status(200).json({message: "author deleted"});
        } catch (error) {
            res.status(500).json({message: `${error.message}, server failed to delete the author.`});
        };
    };
};

export default AuthorController;