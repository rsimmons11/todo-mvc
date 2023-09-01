// This line imports the 'express' library/module and assigns it to the constant variable 'express,' allowing you to create an Express.js application.
const express = require('express')
// This line creates a new router object using the 'express.Router()' method, which you can use to define routes for your application.
const router = express.Router()
// Here, you import a module named 'home' from the '../controllers' directory and assign it to the 'homeController' constant. This module likely contains functions to handle routes for the home page.
const homeController = require('../controllers/home')

// This line defines a GET route for the root path ('/') using the 'router' object, specifying that the 'getIndex' function from the 'homeController' should handle the route when a GET request is made to the root path.
router.get('/', homeController.getIndex) 

// Finally, this line exports the 'router' object, making it available for use in other parts of your application, typically in the main application file. It allows you to mount this router in your main Express app.
module.exports = router