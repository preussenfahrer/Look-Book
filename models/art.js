const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    title: {type: String},
    author: {type: String},
    date: {type: Date, default: Date.now},
    image: {type: String}
});

const Art = mongoose.model("Art", artSchema);

module.exports = Art;