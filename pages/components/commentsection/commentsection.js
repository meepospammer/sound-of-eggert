import React from 'react'
import styles from './commentsection.module.css'

var comments = ["I really enjoyed this project! The production was outstanding",
            "The  artist really delivered and surpassed expectations",
            "I'm feeling a light to decent 6 on this thing, but thats just my opinion. You guys, you were asking for this.. lemme know what you think of this album."]

export default function commentsection() {
  var commentlist = []
  for(let i = 0; i < comments.length; i++){
    var object = <div>
                    <h2>
                      Username
                    </h2>
                    <p>
                    {comments[i]} 
                    </p>
                  </div>
    commentlist.push(object)
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
        <textarea placeholder='Leave a review...' type="text"/>
      </l>
      <l>
        {commentlist}
      </l>
    </ul>
    
    </>
  )
}
