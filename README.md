# Startup
A startup web application created for a web programming course

### SSH (w/ key pair) Command: 
`ssh -i [key pair file] ubuntu@[ip address]`

### My EC2 IP 
`3.142.176.217`


## Startup Project Pitch
Every election season, tons of voters go to the polls. Most of them submit a ballot based on party politics -- they either vote entirely for republicans or entirely for democrats. Only 4% of voters in the last presidential election voted for a senator from the opposite policital party of their preferred presidential candidate. This is likely due (in part) to a lack of political knowledge and education. Voters are not informed on the topics that are important to the candidates. Rather, voters are forced to form political opinions based off of campaign ads or debate speeches that target the personal flaws of candidates. Voters never learn the candidate's real goals or values. The application I want to build will be a non-partisan political education tool. In terms of look and feel, it will be similar to prevailing social media applications. However, only verified politicians will be given access to make posts. There will be no commenting, sharing, or liking. The average American will only be able to read posts. This will create an environment in which political candidates can share their true views on important topics, so that voters can make informed decisions.

## Key Features
* Sharing of text-based posts or "statuses"
* Sharing of news
* Creation of a scrollable "timeline" so the end-user can peruse the posts of different politicians
* No need for "following" or "friending" certain users - every post will be made available on the timeline of every user (this will work for now with a small-scale application but may change)

### Potential Features
* Separation of timeline into local, state, and federal levels
* Real-time polls or debates between candidates online

## Low-Fidelity Prototype
![Wireframe for the Project Specification Assignment](Images/Wireframe_for_Startup.png)



### Notes from Simon HTML Project
* Learned about the menu element (can be a replacement for an OL or UL)
* Learned about the sup element that allows for superscript
* Learned what "&reg" does (creates a registered trademark symbol)
* Learned about the link tag for inside the head
* Learned a general structure that is easy to follow: header, main, footer
* Learned how to implement the table, and what a th does


### Notes from Simon CSS Project
* Learned a little bit more about Bootstrap framework (and how it is implemented into the HTML files)
* Uses the class="" syntax a lot to define a class for each element so that Bootstrap can apply CSS to it
* Learned in more detail about flexboxes and how they work



### Notes from Startup HTML/CSS Project
* There are websites out there that just have example Bootstrap elements with associated code.
* I learned when to use the "!important" keyword in CSS and when not to use it
* I became very comfortable editing style in a stylesheet
* I learned how to create and embed news (through RSS feeds and an aggregator)


### Notes from Simon Javascript Project
* I learned about how to use "onclick" to make things happen on the click of a button
* I was able to become much more comfortable with Javascript syntax by writing out several functions (within a pair of classes)
* It was very insightful to see how to add things to LocalStorage and how to retrieve them from LocalStorage using JSON.parse() and JSON.Stringify()
* It is extremely helpful to have more examples of Javascript Promise syntax and Async/Await syntax


### Notes from Startup Javascript Project
* Use the "window.onload = function() {}" syntax to create a function that runs immediately on the load of the page.
* "document.getElementById(newDeleteButton.id).onclick = function() {}" to add an onclick function via Javascript
* Use the Javascript "Slice" function for removing an item from an array. array.slice(i) where the return value is the array from index i to the end
* Use the "document.createElement()" function for adding a display of something. Build helper functions around it to allow you to include things like ID, class, etc.
* Determine what classes you are going to need first. I was lost on working on this project until I determined to make a Javascript class for "Post" objects
* Classes can be defined in a format that is pretty standard in comparison to other programming languages. List attributes at the top, then a constructor, then other functions
* localStorage.getItem('Name')
* localStorage.setItem('Name", JSON.Stringify(item))
* The Javascript array has a built in "Push" method
* "===" for comparison in an "if" statement
* Go for basic functionality first: Create, Read, Update, Delete

### Notes from Simon Service Project
* Use "pm2 restart {service name}" to restart a service; in this case, "pm2 restart simon" on the Caddy server

    * fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
        .then((response) => response.json())
        .then((data) => {
        
*The above syntax is used for service calls. This service call makes a request to Picsum to get a random image. The ${random} variable was generated separately just before this code.
*I was able to become much more comfortable with the syntax for calling a service function:
       *try {
         const response = await fetch('/api/score', {
           method: 'POST',
           headers: { 'content-type': 'application/json' },
           body: JSON.stringify(newScore),
         });
         
         
         
### Notes from Simon DB Project
* When you are setting an environment variable for your local dev environment in Windows, you need to add it by going: Start -> Edit your System Environment Variables
* When you edit these environment variables, you will need to restart the program accessing these variables (Close VS code and restart it)
* For linux, just edit the "/etc/environment" file
* String for assembling MongoDB URL:      const url = `mongodb+srv://${userName}:${password}@${hostname}`;
* const client = new MongoClient(url);
* To make and refer to a collection programatically: const collection = client.db('<db_name>').collection('<collection_name>');
* The "insertOne()" function can be used to enter a new item in MongoDB database collection. It can take a parameter of the object you want to add
* How to include MongoDB: const { MongoClient } = require('mongodb');
* Use the find function to search through a collection for a value: const value = collection.find();
* On this find function: You can include a "query" or "options" parameter
* Query: `const query = { property_type: 'Condo', beds: { $lt: 2 } };` is code that will search for "Condo" property type with less than 2 beds (in BNB example)
* Options: const options = { sort: { price: -1 }, limit: 10, };   --- This puts results in descending order by price, and limits to the top 10 results
