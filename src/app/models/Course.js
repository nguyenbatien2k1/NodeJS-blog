import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, max: 255},
    description: {type: String, max: 500},
    image: {type: String, max: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('Course', Course)