import React, { useRef } from 'react'

const UncontrolledComp = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const handleSubmit = (e) => {
        alert(`Welcome ${ref1.current.value} ${ref2.current.value}`)
        console.log(`First name : ${ref1.current.value}`)
        console.log(`Last name : ${ref2.current.value}`)
        e.preventDefault();
    }
  return (
    <div className="max-w-md mx-auto mt-10 text-white bg-gradient-to-b from-red-900 via-red-600 to-red-50 shadow-lg rounded-2xl p-4 border-2 border-rose-400">
      <h2 className="text-2xl font-bold text-center mb-6 uppercase">Uncontrolled Form</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className='flex gap-8'>
          <label className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            ref={ref1}
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white transition" placeholder="Enter first name" />
        </div>
        <div className='flex gap-8'>
          <label className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            ref={ref2}
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white transition" placeholder="Enter last name" />
        </div>
        <button type="submit" className="py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-95 transition" >
          Submit
        </button>

      </form>
    </div>
  )
}

export default UncontrolledComp
