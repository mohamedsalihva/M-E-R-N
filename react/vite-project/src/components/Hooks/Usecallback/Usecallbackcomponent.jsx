import React, { useCallback, useState } from 'react'

function Usecallbackcomponent() {
    console.log("parent re rendering...");
    const [count,setCount] = useState(0);
    const [data,setData] = useState('');

    const handleclick = useCallback (()=>{
        setCount(count + 1);
    },[count]);

  return (
    <>
      <h1>count:{count}</h1>
    <Childcomponent onClick ={handleclick}/>
    </>
  )
}

function Childcomponent({onClick}){
    console.log("child re rendering...");
    return<button onClick={onClick}>increment</button>
}

export default Usecallbackcomponent
