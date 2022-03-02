import React from 'react';

///this react component will handle the collection of user data and saving to backend 
/// thsi is the prototype for the component that handles submitting comments from users!

export default function submitPost() {
    
     /// **Todo** this function will talk to our backend and save a post in our database
     const formHandler = async event => {
        event.preventDefault()

        const res = await fetch('/api/submitPost', {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
        }

     return (
         /// html form in jsx that retreives user input
         <form onSubmit={formHandler}>
         <label htmlFor="post">Tell the world what you think!</label>
         <input id="post" name="post" type="text" autoComplete="post" required />
         <button type="submit">send your post! </button>
         </form>

     )

}

