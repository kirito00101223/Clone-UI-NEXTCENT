import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Client from './Components/Client'
import Community from './Components/Community'
import Pixelgrade from './Components/pixelgrade'
import Stast from './Components/Stast'
import Meet from './Components/Meet'
import Arcticle from './Components/arcticle'
import Demo from './Components/Demo'
import How from './Components/How'

function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Client/>
      <Community/>
      <Pixelgrade/>
      <How/>
      <Stast/>
      <Meet/>
      <Arcticle/>
      <Demo/>
    </>
  )
}

export default App
