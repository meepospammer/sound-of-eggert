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
                        Elias <br/> Josh <br/> Sami <br/> Seb
                    </div>
                </>
            </li>
            <li className={styles.li}>
                <b>
                    Contact us via: <br/>
                </b> 
                <Link href="mailto:eliasberner@g.ucla.edu">
                    Email: eliasberner@g.ucla.edu
                </Link> 
            </li>
        </ul>
        </>
    )
}

export default Footer;