import express from "express";
import books from "./bookRouter.js";

const routes = (app)=> {
    app.route("/").get((req, res) => {
        return res.status(200).send("Node.js coruse");
    });
    
    app.use(express.json(), books)
}

export default routes;
