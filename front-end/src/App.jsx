import React, { useState } from 'react'
import Background from './components/Background';
import Navbar from './components/Navbar';

const App = () => {
  let heroData = [
    {text1:"Indulge",text2:"your passions"},
    {text1:"Unlock",text2:"the power of"},
    {text1:"Grow",text2:"your life"}

  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
    </div>
  )
}

export default App