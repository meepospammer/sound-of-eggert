import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Welcome from './components/welcome/welcome'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <main>
          <Welcome/>
          
        </main>
      </div>
    </>
  )
}
