//UseEffect : Side effect which should take place after page is rendered or loaded
//Component Life Cycle
//Initialization -> Mounting -> Updating -> Unmounting
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {

//     const [Like, setLike] = useState(0);
//     const [value, setValue] = useState("React");
//     useEffect(() => {
//         console.log("The component is mounted.")
//         // return () => console.log("The component is unmounted", Like)
//     });
//     const changeLike = () => {
//         setLike((pre) => pre+1)
//     }
//     const changeValue = () => {
//         setValue(() => {return "Java"})
//     }
//   return (
//     <div>
//       <h2>Likes : {Like}</h2>
//       <h2>Value : {value}</h2>
//       <button onClick={changeLike}>❤️</button>
//       <button onClick={changeValue}>VALUE</button>
    
//     </div>
//   )
// }

// export default UseEffect

//error need to solve
import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // useEffect to log when visibility changes (for demo)
  useEffect(() => {
    console.log(show ? "Password is visible" : "Password is hidden");
  }, [show]); // runs whenever 'show' changes

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg p-6 rounded-2xl w-80 text-center">

        {/* Password Input */}
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="border border-blue-400 p-2 text-black rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Toggle Button */}
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all"
        >
          {show ? "Hide Password" : "Show Password"}
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
