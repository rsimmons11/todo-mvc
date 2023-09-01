// This line imports the Mongoose library, which is used to interact with MongoDB from Node.js.
const mongoose = require('mongoose')

// This is an asynchronous function named connectDB, which is responsible for establishing a connection to a MongoDB database. It uses the async/await syntax to handle promises.
const connectDB = async () => {
  // the code attempts to connect to the MongoDB database using the mongoose.connect() method. It uses the process.env.DB_STRING environment variable to specify the database connection string and configures some options like useNewUrlParser, useUnifiedTopology, and useFindAndModify.
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

// This line exports the connectDB function, making it available to be imported and used in other parts of your application to establish a connection to the MongoDB database. This allows you to modularize your code and keep your database connection logic separate from the rest of your application logic.
module.exports = connectDB
 