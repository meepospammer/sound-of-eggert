import React from 'react';
import styles from './navbar.module.css'
import Link from 'next/link'
import Searchbar from '../searchbar/searchbar'

function Navbar() {
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
          <a className={styles.a}>
            <Link href='/myProfile'>
              My Profile
            </Link>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.a}>
          <a href="/api/auth/login">Login</a>
          </a>
        </li>
      </ul>
    </>
  )
}

export default Navbar;