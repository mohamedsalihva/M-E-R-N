import React, { createContext, useContext ,useState} from 'react'
const Themecontext = createContext('black')

function Themedcomponent() {

    const {theme} = useContext(Themecontext)
  return <div style={{background : theme,color :"green"}}> Themed component </div>
  
}

export default Themedcomponent
