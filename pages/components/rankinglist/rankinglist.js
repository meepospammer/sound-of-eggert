import React from 'react';
import styles from './rankinglist.module.css'
import ClickableAlbum from '../clickablealbum/clickablealbum';

var aums = [{name: "Gluee", artist: "Bladee", src: "https://i1.sndcdn.com/artworks-000068528208-1w4h5h-t500x500.jpg", rating: 10, link: "tracklists/gluee"},
              {name: "Graduation", artist: "Kanye West", src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", rating: 8.4, link: "tracklists/graduation"},
              {name: "Red Light", artist: "Bladee", src: "https://upload.wikimedia.org/wikipedia/en/3/3a/Red_Light_Bladee.jpg", rating: 7.9, link: "tracklists/gluee"},
              {name: "Donda", artist: "Kanye West", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/1920px-Solid_black.svg.png", rating: 7.9, link: "tracklists/donda"},
              {name: "MBDTF", artist: "Kanye West", src: "https://m.media-amazon.com/images/I/91dHRGIV65L._SL1500_.jpg", rating: 7.9, link: "tracklists/donda"}]


function rankinglist(props){
    var albums = props.albums
    var objlist = [];
    for(let i = 0; i < albums.length; i++){
        var obj = <ClickableAlbum name={albums[i].title} artist={albums[i].Artist}
               src="https://i1.sndcdn.com/artworks-000068528208-1w4h5h-t500x500.jpg"
                rating={albums[i].rating.$numberDecimal} link="tracklists/gluee" />
        objlist.push(obj)
    }


    return(
        //Sort albums by ranking and then display in order
        <ul className={styles.ul}>
            {objlist}
        </ul>
    )
}

export default rankinglist;