import React from 'react';
import styles from './navbar.module.css'
import Link from 'next/link'
import Searchbar from '../searchbar/searchbar'
import { useUser } from '@auth0/nextjs-auth0';


function Navbar() {
  const { user } = useUser();
  
  var authentication
  if(user){
    authentication = <a className={styles.a}><Link href='/myProfile'>My Profile</Link></a>
  }else{
    authentication = <a className={styles.a}><a href="/api/auth/login">Login</a></a>
  }

  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.a}>
            <Link href='./' >
              Home
            </Link>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.a}>
            <Link href='/tracklists' >
              Discover Music
            </Link>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.a}>
            <Link href='/social'>
                Album Rankings
            </Link>
          </a>
        </li>
        <search className={styles.search}>
          <Searchbar/>
        </search>
        <li className={styles.li}> 
          {authentication}
        </li>
      </ul>
    </>
  )
}

export default Navbar;