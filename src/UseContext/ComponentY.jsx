import React, { useContext } from 'react'
import { marksContext, snameContext } from './ProviderComp'

const ComponentY = () => {
    const sname = useContext(snameContext);
    const marks = useContext(marksContext);

  return (
    <div>
      <h2>Welcome to Component Y.</h2>
      <h2>The name is : {sname} and marks is : {marks}</h2>
    </div>
  )
}

export default ComponentY
