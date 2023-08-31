// This line imports the 'mongoose' library, allowing you to interact with a MongoDB database using JavaScript.
const mongoose = require('mongoose')
// Here, you define a schema for a 'Todo' item using the 'mongoose.Schema' constructor. This schema specifies the structure of a 'Todo' document in the database, including its fields ('todo' and 'completed') and their data types and requirements.
const TodoSchema = new mongoose.Schema({
  // Within the 'TodoSchema' definition, you specify that the 'todo' field should be of type 'String' and is required, meaning it must have a value when creating a 'Todo' document.
  todo: {
    type: String,
    required: true,
  },
  // Similarly, you specify that the 'completed' field should be of type 'Boolean' and is required.
  completed: {
    type: Boolean,
    required: true,
  }
})
// Export a 'Todo' model using the 'mongoose.model' method. This model is based on the 'TodoSchema' you defined earlier, allowing you to create, read, update, and delete 'Todo' documents in the MongoDB database.
module.exports = mongoose.model('Todo', TodoSchema)
