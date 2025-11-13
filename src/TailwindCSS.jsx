import React from 'react'
import './TailwindCSS.css'
const TailwindCSS = () => {
  return (
    <div className='border border-gray-400 border-r-8 border-b-8 m-4 rounded-xl bg-white text-black h-90 w-100 mx-auto'>
      {/* <p className='text-5xl p-4'>This is Tailwind CSS example.</p> */}
        <div className='flex justify-center align-center p-4'>
            <img className='rounded-[50%] h-25 w-25 border border-4 border-yellow-800' src="https://i.pinimg.com/736x/65/da/8a/65da8ae42ccef4b511b9cc3108130c11.jpg" alt="photo" />
        </div>
        <div className='m-2 p-2'>
            <p className='italic text-gray-500'>Tailwind CSS made designing so simple! I could create responsive layouts without writing a single CSS file.</p>
            <h2 className='font-bold p-2'>—Aditya Thakur</h2>
            <h2 className='text-gray-500'>Frontent Developer</h2>
        </div>
    </div>
  )
}

export default TailwindCSS
