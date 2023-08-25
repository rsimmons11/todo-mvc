// Import the Express.js framework to create a web server.
const express = require('express')

// Create an instance of the Express application, which represents your web server.
const app = express()

// Import a function called connectDB from a module located in the './config/database' file. This function is typically responsible for connecting to a database.
const connectDB = require('./config/database')

// Import two sets of route handlers from separate modules, 'home' and 'todos'. These modules likely define how the server should respond to different HTTP requests on specific routes.
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

// Load environment variables from a '.env' file located in the './config/' directory using the dotenv package. This is commonly used to store configuration settings for the application.
require('dotenv').config({path: './config/.env'})

// Calls the function to establish a connection to a database. The specific database and connection details are typically defined in the './config/database' module.
connectDB()

// Set the view engine to 'ejs' (Embedded JavaScript), indicating that this application will use EJS templates to render dynamic content on web pages.
app.set('view engine', 'ejs')

// Serve static files (e.g., CSS, JavaScript, images) from the 'public' directory. This allows clients to access these files directly via URLs.
app.use(express.static('public'))

// Configure Express to parse incoming requests. The first line parses URL-encoded data (commonly used in form submissions), and the second line parses JSON data from requests.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set up route handlers for different parts of the application. Requests to the root path ('/') will be handled by homeRoutes, while requests to '/todos' will be handled by todoRoutes.
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

// Start the Express server and make it listen on a port specified in the 'process.env.PORT' environment variable. When the server starts, it runs the provided callback function, which logs a message to the console indicating that the server is running. 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    