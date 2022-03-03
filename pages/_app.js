import '../styles/globals.css'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer'

import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </UserProvider>
  )
}

export default MyApp

