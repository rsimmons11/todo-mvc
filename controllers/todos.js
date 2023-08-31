// Import the 'Todo' model from a file located in the '../models/' directory.
const Todo = require('../models/Todo')

// Export an object containing several methods that handle various actions related to managing todo items.
module.exports = {
    // Retrieves all todo items, counts the number of incomplete items, and renders a 'todos.ejs' template.
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    // Creates a new todo item based on the request body and redirects to the '/todos' page.  
    createTodo: async (req, res)=>{
        // This line marks the beginning of a try block, indicating that it's going to try executing the code within this block and handle any errors that may occur.
        try{
            // This line asynchronously creates a new todo item in a database using data from the request body and sets its 'completed' field to 'false'.
            await Todo.create({todo: req.body.todoItem, completed: false})
            // After creating the todo item, this line logs the message 'Todo has been added!' to the console, confirming the successful operation.
            console.log('Todo has been added!')
            // It redirects the client to the '/todos' route, indicating the successful completion of the operation.
            res.redirect('/todos')
        // In case of an error during the try block execution, this line initiates a catch block to handle the error and logs it to the console for debugging or error tracking purposes.
        }catch(err){
            console.log(err)
        }
    },
    // Marks a todo item as complete based on its ID and sends a JSON response.
    markComplete: async (req, res)=>{
        // This line marks the beginning of a try block, indicating that it's going to try executing the code within this block and handle any errors that may occur.
        try{
            // This line uses the await keyword to update a todo item in a database. It finds a todo item based on its unique ID (_id) received from the request (req.body.todoIdFromJSFile) and sets its completed field to true.
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{completed: true})
            console.log('Marked Complete')
            // This line sends a JSON response ('Marked Complete') to the client to indicate the successful operation.
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    // Marks a todo item as incomplete based on its ID and sends a JSON response.
    markIncomplete: async (req, res)=>{
        try{
            // Within the try block, this line asynchronously finds a todo item in the database based on its unique ID (provided in the request body), and updates its 'completed' field to 'false'.
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{completed: false})
            // After marking the todo item as incomplete, this line logs 'Marked Incomplete' to the console to indicate the successful operation.
            console.log('Marked Incomplete')
            // It sends a JSON response to the client with the message 'Marked Incomplete' to confirm the successful operation.
            res.json('Marked Incomplete')
        // In case an error occurs during the try block execution, this line initiates a catch block to handle and log the error for debugging or error tracking purposes.
        }catch(err){
            console.log(err)
        }
    },
    // Deletes a todo item based on its ID and sends a JSON response.
    deleteTodo: async (req, res)=>{
        // This line logs the ID of the todo item received from the request to the console.
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            // This line uses await to find and delete a todo item in the database based on its unique ID (_id) received from the request.
            console.log('Deleted Todo')
            // This line sends a JSON response ('Deleted It') to the client to indicate the successful deletion.
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    