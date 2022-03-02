import React from 'react';
import styles from './albumoverview.module.css'
import Link from 'next/link'

function getdimension(){
    const {innerWidth: width, innerHeight: height} = window;
    return{
        width, height
    };
}

function Albumoverview(){
    var imgwidth = getdimension;
    return(
        <>
            <ul className={styles.ul}>

                <img src="https://upload.wikimedia.org/wikipedia/en/8/84/Bladee_333_album_art.jpeg"
                 className={styles.img}/>
                 <img src="https://media.pitchfork.com/photos/60b7947503d100f6ea2f7e4f/1:1/w_320/Bladee:%20The%20Fool.jpeg"
                 className={styles.img}/>
                 <img src="https://i.pinimg.com/736x/a6/6c/9f/a66c9fe1298445f29f8fc025e302ceff.jpg"
                 className={styles.img}/>
                 <img src="https://f4.bcbits.com/img/a1724115191_10.jpg"
                 className={styles.img}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/8/84/Bladee_333_album_art.jpeg"
                 className={styles.img}/>
                 <img src="https://media.pitchfork.com/photos/60b7947503d100f6ea2f7e4f/1:1/w_320/Bladee:%20The%20Fool.jpeg"
                 className={styles.img}/>
                 <img src="https://i.pinimg.com/736x/a6/6c/9f/a66c9fe1298445f29f8fc025e302ceff.jpg"
                 className={styles.img}/>
                 <img src="https://f4.bcbits.com/img/a1724115191_10.jpg"
                 className={styles.img}/>

                <img src="https://e.snmc.io/i/600/s/2e51287d2f86bd9fb2c55034ed3c18c5/9591891/thaiboy-digital-legendary-member-Cover-Art.jpg"
                 className={styles.imgtwo}/>
                 <img src="https://media.pitchfork.com/photos/5e0e2624f3d2500009bb06d4/1:1/w_600/e_ecco2k.jpg"
                 className={styles.imgtwo}/>
                 <img src="https://radio.rutgers.edu/wp-content/uploads/2019/09/artworks-000596558636-2i9f4x-t500x500.jpg"
                 className={styles.imgtwo}/>
                 <img src="https://e.snmc.io/i/600/s/12e676e23d6c582bb57a93e8178a6bb3/7621133/bladee-eversince-Cover-Art.png"
                 className={styles.imgtwo}/>
                 <img src="https://e.snmc.io/i/600/s/2e51287d2f86bd9fb2c55034ed3c18c5/9591891/thaiboy-digital-legendary-member-Cover-Art.jpg"
                 className={styles.imgtwo}/>
                 <img src="https://media.pitchfork.com/photos/5e0e2624f3d2500009bb06d4/1:1/w_600/e_ecco2k.jpg"
                 className={styles.imgtwo}/>
                 <img src="https://radio.rutgers.edu/wp-content/uploads/2019/09/artworks-000596558636-2i9f4x-t500x500.jpg"
                 className={styles.imgtwo}/>
                 <img src="https://e.snmc.io/i/600/s/12e676e23d6c582bb57a93e8178a6bb3/7621133/bladee-eversince-Cover-Art.png"
                 className={styles.imgtwo}/>

                <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg"
                 className={styles.imgthree}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png"
                 className={styles.imgthree}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg"
                 className={styles.imgthree}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png"
                 className={styles.imgthree}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg"
                 className={styles.imgthree}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png"
                 className={styles.imgthree}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg"
                 className={styles.imgthree}/>
                 <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png"
                 className={styles.imgthree}/>
                 
            </ul>
            <div className={styles.div}>
                this is text
            </div>
        </>
    )
}

export default Albumoverview;