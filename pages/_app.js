import '../styles/globals.css'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer'

import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
    <pagecontainer>
    <Navbar/>
    <Component {...pageProps} />
    </pagecontainer>
    <Footer/>
  </UserProvider>
  )
}

export default MyApp

