const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },

    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            text: {
                type: String,
                required: true
            },
            name: { type: String },
            username: { type: String },
            avatar: { type: String },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Post = mongoose.model('post', PostSchema);
