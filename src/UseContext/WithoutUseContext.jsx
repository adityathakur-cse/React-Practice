import React, {useState} from "react";
//passing of property from one component to another is called prop drilling
//(props)
//comp 1
//comp 2
//comp 3
const WithoutUseContext = () => {
    const [subject, setSubject] = useState("React")
  return (
    <div>
      <h2>This is first component and passing the subject as prop to Component A.</h2>
      <ComponentA subject = {subject}/>
    </div>
  )
}
const ComponentA = ({subject}) => {
    return(
        <div>
            <h2>This is Component A and receiving the prop from the first component.</h2>
            <ComponentB subject = {subject}/>
        </div>
    )
}
const ComponentB = ({subject}) => {
    return(
        <div>
            <h2>This is Component A and receiving the prop from the component A.</h2>
            <h2>I am studying the subject : {subject}</h2>
        </div>
    )
}
export default WithoutUseContext
