import { Router } from "express";
import Post from "../models/post.js";

const router = Router();

// get all todos
router.get("/", async (request, response) => {
    try {
        const posts = await Post.find();
        response.send(posts);
    }
    catch(err) {
        response.status(500).send({
            message: err.message
        });
    }
});

// add todo item
router.post("/", async (request, response) => {
    try {
        // save todo item to db
        const post = new Post({
            ...request.body
        });
        await post.save();

        response.send({
            message: "ToDo item successfully uploaded."
        });
    }
    catch(err) {
        response.status(500).send({
            message: err.message
        });
    }
});

// edit todo item
router.post("/:todoid", async (request, response) => {
    try {
        // find todo to edit
        const todoToEdit = await Post.findById(request.params.todoid);

        // update and save
        todoToEdit.title = request.body.title;
        await todoToEdit.save();

        response.send({
            message: "Todo has been updated."
        });
    }
    catch(err) {
        response.status(500).send({
            message: err.message
        });
    }
});

export default router;