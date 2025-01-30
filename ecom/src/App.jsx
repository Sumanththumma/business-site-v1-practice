import React from 'react'
import Header from "./Components/Header.jsx";
import Shoes from "./Components/Shoes.jsx";
const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Header />
        <Shoes />
    </div>
  )
}

export default App