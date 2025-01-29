import React from 'react'
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Header />
        <Hero />
    </div>
  )
}

export default App