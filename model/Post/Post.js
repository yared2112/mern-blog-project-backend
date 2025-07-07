const mongoose = require('mongoose');

// Define the User schema- a blueprint of creating an object out of the model for the User model
// This schema defines the structure of the User documents in the MongoDB database
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: '', // Default to an empty string if no image is provided
    },
    claps: {
        type: Number,
        default: 0, // Default to 0 claps if no claps are provided
    },
    content: {
        type: String,
        required: 'true',
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
    postViews: {
        type: Number,
        default: 0, // Default to 0 shares if no shares are provided
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // This can be an ObjectId of a User document representing the author of the post
        required: true, 
        ref: 'Category', // Reference to the Category model
    },
    scheduledPost: {
        type: Date,
        default: null
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], // This can be an ObjectId of a User document representing the users who liked the post
    disLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User',}], 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}], // This can be an ObjectId of a Comment document representing the comments on the post
    tags: [{ type: String, default: '' }], // Default to an empty string if no tags are provided
    
    },{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
})

// Create the Post model using the PostSchema
const Post = mongoose.model('Post', postSchema);

module.exports = Post; 