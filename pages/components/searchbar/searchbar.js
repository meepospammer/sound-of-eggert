import React from 'react';
import styles from './searchbar.module.css'
import { useState } from 'react';


function Searchbar(){

    const [inputval, setinputval] = useState('')

     //When search button is clicked the searchbar input is stored in inputval
     //TODO: link to searchpage and transfer inputval variable to searchpage so we can parse db for matches
    function handleClick(e){                               
        console.log(inputval)
        document.getElementById('search').value= ''
    }


    return(
        <>
            <input
                type='text'
                placeholder='Search for your favorite music...'
                className={styles.input}
                id="search"
                value={inputval} onChange={(e)=>setinputval(e.target.value)}
            />
            <button className={styles.btn} onClick={handleClick}>
                Search
            </button>
            
        </>
    )
}
export default Searchbar;

