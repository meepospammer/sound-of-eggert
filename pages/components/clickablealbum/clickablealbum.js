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
                <artist>
                    {props.artist}
                    :
                </artist>
            </li>
            <li className={styles.li}>
                <name>
                    <Link href='tracklists/gluee'>
                       {props.name}
                    </Link>
                </name>
            </li>
            <li className={styles.li}>
                <rating>
                    {props.rating}
                </rating>
            </li>
        </p>
    )
}

export default ClickableAlbum;