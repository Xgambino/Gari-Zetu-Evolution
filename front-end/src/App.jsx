import React, { useState } from 'react'
import Background from './components/Background';

const App = () => {
  let heroData = [
    {text1:"Indulge",text2:"your passions"},
    {text1:"Unlock",text2:"the power of"},
    {text1:"Grow",text2:"your life"}

  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      
    </div>
  )
}

export default App