import React from 'react';
import styles from './rankinglist.module.css'
import ClickableAlbum from '../clickablealbum/clickablealbum';

function rankinglist(props){
    return(
        <ul>
            <ClickableAlbum/>
        </ul>
    )
}

export default rankinglist;