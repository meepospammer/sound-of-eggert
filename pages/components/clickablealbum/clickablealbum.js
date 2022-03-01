import React from 'react';
import styles from './clickablealbum.module.css'
import Link from 'next/link'

function ClickableAlbum(props){
    return(
        //This is just a general component, we'll have to pass it the album values when we have a working backend
        <p className={styles.p}>
            <li className={styles.li}>
                <img src ={props.src}
                 width='100px' height='100px'
                 />
            </li>
            <li className={styles.li}>
                <a className={styles.a}>
                    <h2> {props.artist}: </h2>
                </a>
            </li>
            <li className={styles.li}>
                <a className={styles.a}>
                    <h2>
                    <Link href='/tracklist/graduation'>
                       {props.name}
                    </Link>
                    </h2>
                </a>
            </li>
            <li className={styles.li}>
                <a className={styles.a}>
                    <h1>
                        {props.rating}
                    </h1>
                </a>
            </li>
        </p>
    )
}

export default ClickableAlbum;