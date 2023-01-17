import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";
import mongooseSlugGenerator from "mongoose-slug-generator";
const Schema = mongoose.Schema;

mongoose.plugin(mongooseSlugGenerator)

const Course = new Schema({
    name: {type: String, max: 255, required: true},
    description: {type: String, max: 500},
    image: {type: String, max: 255},
    slug: { type: String, slug: 'name', unique: true},
    videoId: {type: String, required: true},
    level: {type: String},
}, {
    timestamps: true,
});

Course.plugin(MongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' 
})

export default mongoose.model('Course', Course)