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
    <div className='border'><br></br>
      <input type="text" placeholder='  Type here' ref={preRef} value={val} onChange={(a) => setValue(a.target.value)} className='outline-0 border-2 border-solid border-green-400'/>
      <h2>Current value : {val}</h2>
      <h2>Previous value : {preRef.current}</h2>
      <h2>Rendering number : {renderValue.current}</h2>
      <br></br>
    </div>
  )
}

export default UseRefExample2