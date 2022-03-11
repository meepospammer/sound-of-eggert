import React from 'react'
import styles from './commentsection.module.css'
import { useState } from 'react';
import { Component } from 'react';

var comments = ["I really enjoyed this project! The production was outstanding",
            "The  artist really delivered and surpassed expectations",
            "I'm feeling a light to decent 6 on this thing, but thats just my opinion. You guys, you were asking for this.. lemme know what you think of this album."]

var commentlist = { comments: []};

export default function commentsection() {
  createComments(commentlist)

  const [inputval, setinputval] = useState('')
  function handleInput(e) {
    comments.push(inputval)
    createComments(commentlist)
    document.getElementById('comment').value= ''
    setinputval('')
  }

  const formHandler = async event => {
    event.preventDefault()
    handleInput(event)

    const res = await fetch('/api/submitPost', {
        body: JSON.stringify({
          comment: event.target.comment.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    }

    
  return (
    <>
    <ul className={styles.container}>
      <l>
        <h1>
          Album Reviews:
        </h1>
      </l>
      <l>
      <form onSubmit={formHandler}>
         <textarea id="comment" name="comment" type="text" placeholder="Tell the world what you think!"
          onChange={(e)=>setinputval(e.target.value)} autoComplete="comment" required />
         <button type="submit">send your post! </button>
          </form>
      </l>
      <l id="up">
        {commentlist.comments}
      </l>
    </ul>
    </>
  )
}

function createComments(commentlist){
  commentlist.comments = []
  for(let i = 0; i < comments.length; i++){
    var object = <div>
                    <h2>
                      Username
                    </h2>
                    <p>
                    {comments[i]} 
                    </p>
                  </div>
    commentlist.comments.push(object)
  }
  return; 
}
