import React from 'react'
import { useState } from 'react'
import Themedcomponent from './Themedcomponent';
import Themeselector from './Themeselector';

 function Usecontextcomponent() {
    const [theme,setTheme] = useState('light')
    const contextvalue = {theme, setTheme};
  return (
    <div>
      <Themecontex.provider value ={contextvalue}>
        <Themedcomponent/>
        <Themeselector/>
      </Themecontex.provider>
    </div>
  )
}

export default Usecontextcomponent;