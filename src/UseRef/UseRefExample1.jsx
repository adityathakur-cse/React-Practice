import React, { useRef, useEffect } from 'react'

const UseRefExample = () => {
    const Myref = useRef('');
    useEffect(() => {
        Myref.current.focus();
    }, []);
  return (
    <div>
      <input type="text" ref={Myref} className='outline-0 border-2 border-solid border-amber-400'/>
    </div>
  )
}

export default UseRefExample
