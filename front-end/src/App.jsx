import React, { useEffect, useState } from 'react'
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  let heroData = [
    {text1:"Indulge",text2:"your passions"},
    {text1:"Unlock",text2:"the power of"},
    {text1:"Grow",text2:"your life"}

  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  })

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App