import express from "express";
import books from "./bookRouter.js";
import authors from "./authorRouter.js"

const routes = (app)=> {
    app.route("/").get((req, res) => {
        return res.status(200).send("Node.js course");
    });
    
    app.use(express.json(), books, authors)
}

export default routes;
