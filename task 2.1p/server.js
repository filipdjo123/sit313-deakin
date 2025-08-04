require('dotenv').config(); // Importing dotenv to load environment variables from a .env file
const express = require('express'); // Importing the express module
const bodyParser = require('body-parser'); // Importing the body-parser module
const https = require('https')

const sgMail = require('@sendgrid/mail'); // Importing the SendGrid mail module 
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Setting the SendGrid API key from environment variables

const app = express(); // Creating an instance of express

app.use(bodyParser.urlencoded({extended: true})) // Using body-parser to parse URL-encoded bodies
app.use(express.static('public')); // Serving static files from the 'public' directory

app.get('/', (req, res) =>{ // Handling GET requests to the root URL
  res.sendFile(__dirname + '/index.html'); // Sending the index.html file as a response
});

app.post('/', (req,res)=> {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name; // Extracting first and last name from the request body
  const email = req.body.email;
  console.log(firstName, lastName, email);
  const data = {
    members: [{
      email_address: email,
      status: 'subscribed',
      merge_fields:{
        FNAME: firstName,
        LNAME: lastName 
      }
    }]
  };
  jsonData = JSON.stringify(data); // Converting the data object to a JSON string

  const apiKey = process.env.MAILCHIMP_API_KEY; // Mailchimp API key
  const list_id = process.env.MAILCHIMP_LIST_ID; // Mailchimp list ID
  const url = 'https://us11.api.mailchimp.com/3.0/lists/${list_id}'; // Mailchimp API endpoint for adding a member to a list
  const options ={
    method: 'POST', // HTTP method
    auth: 'filip:${apiKey}' // Authentication using API key
  };

  const request = https.request(url, options, (response) => {
    response.on('data', (data => {
      console.log(JSON.parse(data));
    }))
  });

  request.write(jsonData);
  request.end();
  console.log(firstName,lastName,email);
  

  const sendMail = async (msg) => {
    try {
      await sgMail.send(msg);
      console.log('Email sent successfully!'); 
    } catch (error) {
      console.error('Error sending email:', error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  };

  sendMail({
    to: 'shen098763@gmail.com',
    from: 'shen098761@gmail.com',
    subject: 'New Subscription',
    text: 'Thank you for subscribing to the Deakin Newsletter1',
  });
})

app.listen(5000, function (request, response){ // Starting the server on port 3000
  console.log('Server is running on port 5000');
})
