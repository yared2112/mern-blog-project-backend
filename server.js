const http = require('http') // Import the http module from node.js
const express = require('express') // Import the express module






//!Server Setup

const app = express() // Create an instance of express
const server = http.createServer(app) // Create an HTTP server using the express app as the callback
//?start the server
const PORT = process.env.PORT || 5000 // Set the port to listen on, defaulting to 5000 if not specified
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))