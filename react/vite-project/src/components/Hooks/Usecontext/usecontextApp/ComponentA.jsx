import React from "react";
import { createContext } from "react";

const Mycontext = createContext('default')

function ComponentA (){
     const contextvalue = usecontext(Mycontext);
     return <div>componentA:{contextvalue}</div>
}
export default ComponentA;