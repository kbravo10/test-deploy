# ZEN SUBCRIPTIONS

This project is to show my skills in the REACT library. This project displays a list of the subscription the user has. The user can either add or remove subscription.

## Project requirements
- You must make a single page application (only one index.html file) using create-react-app.
- Your app should use at least 3 components in a way that keeps your code well organized.
- There should be at least 2 client-side routes using React RouterLinks to an external site.. Be sure to include a nav bar or other UI element that allows users to navigate between routes. Use RESTful routing conventions where applicable
- Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose to incorporate data from an external API but it is not required.
    - You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project. 
    - Upon return of json from your POST request, a state update by a setState function is required!
        // in App:
        function addMovie(newMovie){
            setMovies([...movies, newMovie]) // Updating movies state.
        }

        //in Form
        const configObj = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: "Titanic"})
        }

        fetch('http://localhost:3000/movies', configObj)
        .then(res => res.json())
        .then(data => addMovie(data)) //THIS STATE UPDATE IS REQUIRED!!!
        // clear form

## Creating project 
Created a file in my local repository then ran `create-react-lab` to create create my project to be able to code it using the React library for Javascript.

## Start server
Install `npm install` to begin the project. The resources where you can find all the json data is located in my backend project that is located in my other repository. 
After running my backend project(`http://localhost:3000/subscriptions` for my project purposes) i can start my front end project running `npm start`. A new window in my browser will open up displaying my html code produced by my REACT project.

## Functionality
### ALL of the components `import React from "react"` 


### Page loads
Once the page loads you are greeted with a text bar to input ur name and a login button to enter the application. This is the first component `<Login />` and uses the input to create a variable with the user input to use in the next step. It also sets a state variable to `true` that tells the sets the condition enter the step.


### Page loads 
Once the page loads you are greeted with a header at top center that displays `Welcome {name}!`. Below the header there is navigation bar that is a component `<NavBar>`.Below that there is a small message that tells the user a simple message on what the app does. 

### `<NavBar>`
This component `imports NavLink from react-router-dom` and also imports `./main.css` on top of `react`. 
This returns `<NavLink>`'s that assign a path to specific componets. When ever a NavBar option is clicked it will navigate you to that component. It also adds a path to the url making it easier for the user to be able to see what page they are currently on. 
- NavLinks :
    - Home
    - Subscription
    - Add Subscription
    - Logout


### `<Home />`
Returns a `<div>` with header `<h2>` with a message to the user.

### Subscription navlink
This path naviagates you to the `<SubscriptionCollection />`. This componet imports `<Subscription />` component, `<UserMonth />` component, the main.css file, and a useState and useEffect library. 


We then declare two `useState hooks`. One state is used to store the data reveived by the fetch request and the other state is used to store and set the state to a filter that is used to tell the fetch request what data we are requesting.

We use a `useEffect` hook to only render the fetch statement when the filter state is modified. For the fetch statement we use a GET request since we want to use the data rsponce and store it into the subscriptions state using `setSubscriptions()`. 

Declare a `function onHandleSelect()` that fires up when the user chooses an option from the dropdown menu of the types of subscriptions. The user choice is retreived by getting the event.target.value. Using the value an if statement  


