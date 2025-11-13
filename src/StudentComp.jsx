//destructuring using rest
function StudentComp({age, course, ...rest}){
    return(
        <div>
            <h2>This is Student Function Component.</h2>
            <h4>NAME : {rest.name}, State : {rest.state}, Age : {age}, Course : {course} </h4>
        </div>
    )
}

//destructuring using props
// function StudentComp(props){
//     return(
//         <div>
//             <h2>This is Student Function Component.</h2>
//             <h4>NAME : {props.name}, State : {props.state}, Age : {props.age}, Course : {props.course} </h4>
//         </div>
//     )
// }
export default StudentComp