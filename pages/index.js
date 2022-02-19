import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>


      <main>
        <h1 className="title page">
        <Link href='tracklists/graduation'>
           Check out our favorite albums!
        </Link>
        </h1>


        <div className={styles.grid}>

          <a href="tracklists/" className={styles.card}>
            <h2>Tracklists &rarr;</h2>
            <p>View tracks from artists!</p>
          </a>

          <a href="social/" className={styles.card}>
            <h2> &rarr;</h2>
            <p> View the tracks other users are listening to! </p>
          </a>

          <a
            href="myProfile/"
            className={styles.card}
          >
            <h2>My profile &rarr;</h2>
            <p>View your liked and review tracks!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
