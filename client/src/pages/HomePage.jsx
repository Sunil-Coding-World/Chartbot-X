import React from 'react'
import Home from '../components/home/Home'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Chatbot from '../components/home/Chartbot'

const HomePage = () => {
  return (
    <div>
        <Header/>
      <Home />
      <Chatbot/>
        <Footer/>
    </div>
  )
}

export default HomePage