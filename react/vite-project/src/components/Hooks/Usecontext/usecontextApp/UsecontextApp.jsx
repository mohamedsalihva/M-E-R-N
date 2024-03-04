import React, { Component } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const UsecontextApp = () => {
  return (
    <div>
      <Mycontext.provider value="hello from context">
      <ComponentA/>
      <ComponentB/>
      </Mycontext.provider>

    </div>
  )
}

export default UsecontextApp
