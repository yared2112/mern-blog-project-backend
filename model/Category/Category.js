const mongoose = require('mongoose');

// Define the User schema- a blueprint of creating an object out of the model for the User model
// This schema defines the structure of the User documents in the MongoDB database
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, // This can be an ObjectId of a User document representing the author of the post
        required: true, 
        ref: 'User', // Reference to the User model
    },
    shares: {
        type: Number,
        default: 0, // Default to 0 shares if no shares are provided
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'}], // This can be an ObjectId of a Post document representing the posts in the category
    },{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
})

// Create the Category model using the categorySchema
const Category = mongoose.model('Category', categorySchema);

module.exports = Category; 