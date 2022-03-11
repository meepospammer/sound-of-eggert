import '../styles/globals.css'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer'

import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import appContext from '../contexts/appContext';

function MyApp({ Component, pageProps }) {

  return (
  <UserProvider>
    <pagecontainer>
    <Navbar/>
    <appContext>
      <Component {...pageProps} />
    </appContext>
    </pagecontainer>
  <Footer/>
  </UserProvider>
  )
}

export default MyApp

