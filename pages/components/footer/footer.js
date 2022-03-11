import React from 'react';
import styles from './footer.module.css'
import Link from 'next/link'

function Footer(){
    return(
        <>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <>
                    <b>
                        Sound of Eggert team:
                    </b>
                    <div>
                        Elias Berner<br/> Josh Koh<br/> Sami Hamide<br/> Sebastian Gonzalez
                    </div>
                </>
            </li>
            <li className={styles.li}>
                <b>
                    Contact us via: <br/>
                </b> 
                <Link href="mailto:eliasberner@g.ucla.edu">
                    Email: eliasberner@g.ucla.edu
                </Link> <br/>
                <Link href="mailto:jishkoh@g.ucla.edu">
                    Email: jishkoh@g.ucla.edu
                </Link> <br/>
                <Link href="mailto:samihamide@g.ucla.edu">
                    Email: samihamide@g.ucla.edu
                </Link> <br/>
                <Link href="mailto:sebastiangonzalez@g.ucla.edu">
                    Email: sebastiangonzalez@g.ucla.edu
                </Link> 
            </li>
        </ul>
        </>
    )
}

export default Footer;