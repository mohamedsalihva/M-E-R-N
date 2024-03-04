import React, { useContext } from 'react'
const Themecontext = createContext('black')

function Themeselector() {
    const {setTheme} =useContext (Themecontext);

  return (
    <div>
      <button onClick={()=>setTheme('white')}>lightTheme</button>
      <button onClick={()=>setTheme('black')}>blackTheme</button>
    </div>
  )
}

export default Themeselector
