const express = require('express'); // Importing the express module
const bodyParser = require('body-parser'); // Importing the body-parser module
const https = require("https")

const app = express(); // Creating an instance of express

app.use(bodyParser.urlencoded({extended: true})) // Using body-parser to parse URL-encoded bodies
app.use(express.static('public')); // Serving static files from the 'public' directory

app.get('/', (req, res) =>{ // Handling GET requests to the root URL
  res.sendFile(__dirname + '/index.html'); // Sending the index.html file as a response
})

app.post('/', (req,res)=> {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name; // Extracting first and last name from the request body
  const email = req.body.email;
  console.log(firstName, lastName, email);
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields:{
        FNAME: firstName,
        LNAME: lastName 
      }
    }]
  }
  jsonData = JSON.stringify(data); // Converting the data object to a JSON string

  const apiKey = "d271bb00d99db2f5e768c2dcd6cc9e32-us11" // Mailchimp API key
  const list_id = "a912d98d5c" // Mailchimp list ID
  const url = "https://us11.api.mailchimp.com/3.0/lists/a912d98d5c" // Mailchimp API endpoint for adding a member to a list
  const options ={
    method: "POST", // HTTP method
    auth: "filip:d271bb00d99db2f5e768c2dcd6cc9e32-us11" // Authentication using API key
  }

  const request = https.request(url, options, (response) => {
    response.on("data", (data => {
      console.log(JSON.parse(data));
    }))
  })

  request.write(jsonData);
  request.end();
  console.log(firstName,lastName,email);
})

app.listen(5000, function (request, response){ // Starting the server on port 3000
  console.log('Server is running on port 5000');
})
