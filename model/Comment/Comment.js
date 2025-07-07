const mongoose = require('mongoose');

// Define the User schema- a blueprint of creating an object out of the model for the User model
// This schema defines the structure of the User documents in the MongoDB database
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, // This can be an ObjectId of a User document representing the author of the post
        required: true, 
        ref: 'User', // Reference to the User model
    },
    postId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true}], // This can be an ObjectId of a Post document representing the post on which the comment is made
    },{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
})

// Create the Comment model using the commentSchema
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment; 