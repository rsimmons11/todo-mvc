// This line imports the 'express' library/module and assigns it to the constant variable 'express,' allowing you to create an Express.js application.
const express = require('express')

// This line creates a new router object using the 'express.Router()' method, which you can use to define routes for your application.
const router = express.Router()

// Here, you import a module named 'todos' from the '../controllers' directory and assign it to the 'todosController' constant. This module likely contains functions to handle routes related to managing todos.
const todosController = require('../controllers/todos')

// This line defines a GET route for the root path ('/') using the 'router' object, specifying that the 'getTodos' function from the 'todosController' should handle the route when a GET request is made to the root path. This is likely for retrieving a list of todos.
router.get('/', todosController.getTodos)

// This line defines a POST route for the '/createTodo' path, specifying that the 'createTodo' function from the 'todosController' should handle the route. This is likely for creating a new todo.
router.post('/createTodo', todosController.createTodo)

// This line defines a PUT route for the '/markComplete' path, specifying that the 'markComplete' function from the 'todosController' should handle the route. This is likely for marking a todo as complete.
router.put('/markComplete', todosController.markComplete)

// This line defines a PUT route for the '/markIncomplete' path, specifying that the 'markIncomplete' function from the 'todosController' should handle the route. This is likely for marking a todo as incomplete.
router.put('/markIncomplete', todosController.markIncomplete)

// This line defines a DELETE route for the '/deleteTodo' path, specifying that the 'deleteTodo' function from the 'todosController' should handle the route. This is likely for deleting a todo.
router.delete('/deleteTodo', todosController.deleteTodo)

// this line exports the 'router' object, making it available for use in other parts of your application, typically in the main application file. It allows you to mount this router in your main Express app to handle these specific routes related to todos.
module.exports = router