import React from 'react'

const ComponentB = () => {
    const contextvalue = usecontext(Mycontext);
   
  return (
    
    <div>
     componentB:{contextvalue}
    </div>
  )
}

export default ComponentB
