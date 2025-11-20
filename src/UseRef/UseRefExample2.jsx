import React, { useEffect, useRef, useState } from 'react'

const UseRefExample2 = () => {
    const [val, setValue] = useState('');
    const preRef = useRef('');
    const renderValue = useRef(0);
    useEffect(() => {
        preRef.current = val;
        renderValue.current = renderValue.current+1;
    }, [val]);
  return (
    <div className='bg-blue-900'><br></br>
      <input type="text" placeholder='  Type here' ref={preRef} value={val} onChange={(a) => setValue(a.target.value)} className='outline-0 border-2 border-solid rounded-lg p-2 border-green-300'/>
      <h2>Current value : {val}</h2>
      <h2>Previous value : {preRef.current}</h2>
      <h2>Rendering number : {renderValue.current}</h2>
      <br></br>
    </div>
  )
}

export default UseRefExample2