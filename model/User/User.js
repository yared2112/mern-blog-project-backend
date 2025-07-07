const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

// Define the User schema- a blueprint of creating an object out of the model for the User model
// This schema defines the structure of the User documents in the MongoDB database
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures that no two users can have the same email
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: '', // Default to an empty string if no profile picture is provided
    },
    coverPicture: {
        type: String,
        default: '', // Default to an empty string if no cover picture is provided
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Only allows 'user' or 'admin'
        default: 'user', // Default role is 'user'}
    },
    lastLogin: {
        type: Date,
        default: Date.now(), // Default to the current date and time
    },
    isVerified: {
        type: Boolean,
        default: false, // Default to false, meaning the user is not verified    
    },
    bio: {
        type: String,
        default: '', // Default to an empty string if no bio is provided    
    },
    location: {
        type: String,
        default: '', // Default to an empty string if no location is provided    
    },
    notificationPreferences: {
        emailNotifications: {type: String, default: true},
        //.. other notification preferences can be added here like push notifications, SMS notifications, etc.
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'prefer not to say', 'other'], //.. Only allows 'male', 'female', 'prefer not to say', 'other'
    },

    profileViewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], // This can be an ObjectId of a User document representing the user who viewed the profile
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User',}], 
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], 
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'}], // This can be an ObjectId of a Post document representing the posts created by the user
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'}], 

    socialLinks: {
        twitter: {
            type: String,
            default: '', // Default to an empty string if no Twitter link is provided
        },
        facebook: {
            type: String,
            default: '', // Default to an empty string if no Facebook link is provided
        },
        instagram: {
            type: String,
            default: '', // Default to an empty string if no Instagram link is provided
        },
    },
    accountLevel: {
        type: String,
        enum: ['free', 'pro', 'premium'], // Only allows 'free', 'pro' or 'premium' features for the user to post
        default: 'free', // Default account level is 'free'
    },
    passwordResetToken: {
        type: String,
    },
    passwordResetExpires: {
        type: Date,
        default: Date.now, // Default to the current date and time
    },
    accountVerificationToken: {
        type: String,
    },
    accountVerificationExpires: {
        type: Date,
        default: Date.now,
    }, 
    },{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
})

// Create the User model using the userSchema
const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model so it can be used in other parts of the application
// This allows us to create, read, update, and delete User documents in the MongoDB database using this model
// The User model can be used to interact with the users collection in the MongoDB database
// For example, we can create a new user by calling User.create({ username: 'john_doe', email: 'vMx6M@example.com', password: 'password123' })