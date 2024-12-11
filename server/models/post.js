import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { type: String },
    category: {
        type: String,
        default: "in progress"
    }
});

export default model("Post", postSchema);