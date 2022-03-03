import React from 'react';
import styles from './albumoverview.module.css'
import Link from 'next/link'

var srclist = ["https://media.pitchfork.com/photos/60b7947503d100f6ea2f7e4f/1:1/w_320/Bladee:%20The%20Fool.jpeg",
                "https://i.pinimg.com/736x/a6/6c/9f/a66c9fe1298445f29f8fc025e302ceff.jpg",
                "https://f4.bcbits.com/img/a1724115191_10.jpg",
                "https://upload.wikimedia.org/wikipedia/en/8/84/Bladee_333_album_art.jpeg",
                "https://e.snmc.io/i/600/s/2e51287d2f86bd9fb2c55034ed3c18c5/9591891/thaiboy-digital-legendary-member-Cover-Art.jpg",
                "https://media.pitchfork.com/photos/5e0e2624f3d2500009bb06d4/1:1/w_600/e_ecco2k.jpg",
                "https://radio.rutgers.edu/wp-content/uploads/2019/09/artworks-000596558636-2i9f4x-t500x500.jpg",
                "https://e.snmc.io/i/600/s/12e676e23d6c582bb57a93e8178a6bb3/7621133/bladee-eversince-Cover-Art.png",
                "https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg",
                "https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png",
                "https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b0/Yeezus_album_cover.jpg"
                ];
var linklist = [   "/tracklists/gluee","/tracklists/graduation", "/tracklists/the-college-dropout", "/tracklists/donda",
                "/tracklists/gluee","/tracklists/graduation", "/tracklists/the-college-dropout", "/tracklists/donda",
                "/tracklists/gluee","/tracklists/graduation", "/tracklists/the-college-dropout", "/tracklists/donda"];


function Albumoverview(){

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