import React, {useState} from "react";
// const UseState = () => {
//     const [count, setCount] = useState(0);
//     const incre = () => {
//         setCount((preVal) => {
//             return(preVal+1); //same
//         });
//     }
//     const decre = () => {
//         setCount(preVal => preVal-1); //same
//     }
//     return(
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={incre}> + </button>
//             <button onClick={decre}> - </button>
//         </div>
//     )
// }


// const UseState = () => {
//     const [Led, setLed] = useState({
//         brand : "Samsung",
//         color : "Black",
//         price : "25k"
//     })
//       const changeColor = () => {
//         setLed({ ...Led, color: "Silver" });
//       };
//     return(
//         <div>
//             <h2>My led is of brand {Led.brand} and color is {Led.color}</h2>
//             <button onClick={changeColor}>Change colour</button>
//         </div>
//     )
// }


const UseState = () => {
    const [subject, setSubject] = useState(["React", "Java", "PHP"])
    const changeSubject = () => {
        setSubject((perState) => {
            return([...perState, "C++"])
        })
    }
    return(
        <div>
            <h2>The subjects are : {subject.join(',')}</h2>
            <button onClick={changeSubject}>ADD</button>
        </div>
    )

}
export default UseState