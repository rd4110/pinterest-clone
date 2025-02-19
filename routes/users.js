// Importing mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pinterest_clone")

// Defining the User schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true
    },
    posts: [],
    dp: {
        type: String, // URL or file path to the display picture;image is not stored in db for dp
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
    fullName: {
        type: String,
        required: true,
        
    }
});

// Creating the User model
module.exports  = mongoose.model('User', UserSchema);


