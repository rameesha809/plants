import './App.css'
import Hero from './Hero'
import Body from './Body'
import Benefits from './Benefits'
import Diff from './Diff'
import Footer from './Footer'
import Products from './Products'
import Nav from './Nav'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Nav />
    <Hero />
    <Benefits />
    <Diff />
    <Body />
    <Footer />
    </>
  )
}

export default App
