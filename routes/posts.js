// Importing mongoose
const mongoose = require('mongoose');

// Defining the Post schema
const PostSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets the current date
    },
    likes:{
        type:Array,
        default:[],
    },
});

// Creating the Post model
module.exports = mongoose.model('Post', PostSchema);


