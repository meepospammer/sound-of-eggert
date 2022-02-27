import React from 'react';
import styles from './clickablealbum.module.css'
import Link from 'next/link'

function ClickableAlbum(){
    return(
        //This is just a general component, we'll have to pass it the album values when we have a working backend
        <p className={styles.p}>
            <li className={styles.li}>
                <img src = 'https://i1.sndcdn.com/artworks-000068528208-1w4h5h-t500x500.jpg'
                 width='100px' height='100px'
                 />
            </li>
            <li className={styles.li}>
                <a className={styles.a}>
                    <h2>
                    <Link href='/tracklists'>
                        Bladee: Gluee
                    </Link>
                    </h2>
                </a>
            </li>
            <li className={styles.li}>
                <a className={styles.a}>
                    <h1>
                        10
                    </h1>
                </a>
            </li>
        </p>
    )
}

export default ClickableAlbum;