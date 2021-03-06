const mongoose = require('mongoose');;
const Schema = mongoose.Schema;
let ReplySchema = require('./ReplyModel');


var CommentSchema = new Schema({
    text: {
        type: String,
        required: [true, 'text field is required'],
        text: true
    },
    upvotes:{
        type: [String],
        required: [true, 'upvotes field is required']
    },
    downvotes:{
        type: [String],
        required: [true, 'downvotes field is required']
    },
    userID:{
        type: String,
        required: [true, 'userID field is required']
    },
    dateCreated:{
        type: Date,
        required: [true, 'dateCreated field is required']
    },
    language:{
        type: String
    },
    replies:{
        type: [ReplySchema]
    }
});


const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;
module.exports = CommentSchema;
