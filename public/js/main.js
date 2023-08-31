// This line selects all elements with the class "del" in the HTML document and stores them in the deleteBtn variable
const deleteBtn = document.querySelectorAll('.del')
// This line selects all <span> elements with the class "not" in the HTML document and stores them in the todoItem variable.
const todoItem = document.querySelectorAll('span.not')
// This line selects all <span> elements with the class "completed" in the HTML document and stores in the todoComplete variable
const todoComplete = document.querySelectorAll('span.completed')

// This code iterates through each element in the deleteBtn NodeList (converted to an array) and adds a click event listener to each. When clicked, it calls the deleteTodo function.
Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

// code adds click event listeners to each element in the todoItem NodeList, calling the markComplete function when clicked.
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

// code adds click event listeners to each element in the todoComplete NodeList, calling the markIncomplete function when clicked.
Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

// These are asynchronous functions that handle actions when certain elements are clicked. Each function sends an HTTP request to the server, performs an operation (delete, mark complete, or mark incomplete) based on the clicked element's data, and reloads the page to reflect the changes.

async function deleteTodo(){
    // extracts the unique identifier (todoId) associated with the clicked element's parent node from the data-id attribute.
    const todoId = this.parentNode.dataset.id
    try{
        // sends a DELETE request to the server endpoint 'todos/deleteTodo', providing the todoId in the request body as JSON.
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        // parses the JSON data and logs it to the console.46
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    // Retrieves the data-id attribute value of the parent node of the current element.
    const todoId = this.parentNode.dataset.id
    try{
        // Sends an HTTP PUT request to the 'todos/markComplete' endpoint with the 'todoId' in the request body as JSON
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        // Parses the response from the server as JSON.
        const data = await response.json()
        // Logs the parsed JSON data to the console.
        console.log(data)
        // Reloads the current web page, typically used to reflect changes made by the PUT request.
        location.reload()
    // Logs any caught errors, such as network issues or failed requests, to the console.    
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    // Retrieves the data-id attribute value of the parent node of the current element.
    const todoId = this.parentNode.dataset.id
    try{
        // Sends an HTTP PUT request to the 'todos/markIncomplete' endpoint with the 'todoId' in the request body as JSON.
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        // Parses the response from the server as JSON.
        const data = await response.json()
        // Logs the parsed JSON data to the console.
        console.log(data)
        // Reloads the current web page, typically used to reflect changes made by the PUT request.
        location.reload()
    // Logs any caught errors, such as network issues or failed requests, to the console.
    }catch(err){
        console.log(err)
    }
}