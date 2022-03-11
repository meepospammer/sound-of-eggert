import React from 'react';
import styles from './albumoverview.module.css'
import Link from 'next/link'




function Albumoverview(props){
    var srclist =[]
    var linklist =[]
    var albums = props.albums
    
    //Get album art from props
    for(let i = 0; i < albums.length; i++){
        srclist.push(albums[i].img_src)
        linklist.push("tracklists/"+albums[i].title)
    }

    var objlist = [];
    for(let i = 0; i < 3; i++){
        var st;
        if(i < 1){
            st = styles.imgone;
        }
        else if(i < 2){
            st = styles.imgtwo;
        }else{
            st =styles.imgthree;
        }
        for(let j = 0; j < 2; j++){
            for(let k = 0; k < 4; k++){
                var object = <Link href={linklist[i*4 +k]}><img src={srclist[i*4 +k]} className={st}/></Link>
                objlist.push(object);
            }
        }
    }

    return(
        <>
            <ul className={styles.ul}>
                {objlist}
            </ul>
        </>
    )
}

export default Albumoverview;