import React from 'react';
import styles from './searchbar.module.css'
import { useState } from 'react';


function Searchbar(){

    const [inputval, setinputval] = useState('')

     //When search button is clicked the searchbar input is stored in inputval
     //TODO: link to searchpage and transfer inputval variable to searchpage so we can parse db for matches
    function handleClick(e){                              
        document.getElementById('search').value= ''
        sessionStorage.setItem("search", inputval);
        //hopefully stores data in session storage?
        // can be retrieved by sessionStorage.getItem("Key");
        
    }
    const formHandler = async event => {
        event.preventDefault()
        const body = {'text': event.target.search.value}
        const res = await fetch('/api/fireSearch', {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
            
          })
          handleClick(event)
          console.log(res)

          location.href = "/searchpage?"+inputval
        }

    return(
        <>
            <form onSubmit={formHandler}>
            <input
                type='text'
                placeholder={'Search for your favorite music...'}
                className={styles.input}
                id="search"
                name="search"
                onChange={(e)=>setinputval(e.target.value)}
                
            />
            <button className={styles.btn} type="submit">
                Search
            </button>
            </form>
        </>
    )
}
export default Searchbar;


