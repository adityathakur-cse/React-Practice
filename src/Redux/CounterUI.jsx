import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { incre, decre, reset, addbyNum } from "./CounterSlice";

const CounterUI = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-3">Count: {count}</h1>
      <button className="bg-green-500 text-white px-3 py-1 mr-2 rounded"
        onClick={() => dispatch(incre())}>
        +
      </button>

      <button className="bg-red-500 text-white px-3 py-1 mr-2 rounded"
        onClick={() => dispatch(decre())}>
        -
      </button>
      <input className='p-2 border-white border-2 m-2 rounded-lg ' type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter number'/>
      <button className="bg-blue-600 text-white px-3 py-1 rounded"
        onClick={() => dispatch(addbyNum())}>
        Add by Num
      </button>

      <button className="bg-gray-600 text-white px-3 py-1 rounded"
        onClick={() => dispatch(reset())}>
        Reset
      </button>
      
    </div>
  )
};

export default CounterUI;
