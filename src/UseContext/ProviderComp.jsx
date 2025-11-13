import React, {useState} from "react";
import ComponentX from "../UseContext/ComponentX";
export const snameContext = React.createContext();
export const marksContext = React.createContext();
const ProviderComp = () => {
    const [sname, setSname] = useState("Aman")
    const [marks, setMarks] = useState(90)
  return (
    <div>
        <h2>This is provider component</h2>
      <snameContext.Provider value={sname}>
            <marksContext.Provider value={marks}>
                <ComponentX/>
            </marksContext.Provider>
      </snameContext.Provider>
    </div>
  )
}

export default ProviderComp
