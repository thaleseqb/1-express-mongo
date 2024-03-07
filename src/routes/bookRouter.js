import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/livros", BookController.getBooks);
routes.post("/livros", BookController.postBook);

export default routes