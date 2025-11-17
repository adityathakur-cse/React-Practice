import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Abc from './lists.jsx'
import DashboardComponent, {NewComponent} from './DashboardComponent'
import JSXBasics from './JSXBasics.jsx'
import FileComponent from './FileComponent.jsx'
import LaptopComponent from './LaptopComponent.jsx'
// import { UniClassComp } from './UniClassComp.jsx'
import StudentComp from './StudentComp.jsx'
import InlineCSS from './InlineCSS.jsx'
import ExternalCSS from './ExternalCSS.jsx'
import ModuleCSS from './ModuleCSS.jsx'
import Food from './Food.jsx'
import TailwindCSS from './TailwindCSS.jsx'
import EventHandling from './EventHandling.jsx'
import Counter from './Counter.jsx'
import UseState from './useState.jsx'
import UseEffect from './useEffect.jsx'
import WithoutUseContext from './UseContext/WithoutUseContext.jsx'
import ProviderComp from './UseContext/ProviderComp.jsx'
import ThemeProvider from './UseContext/ThemeProvider.jsx'
import UseReducerExample from './useReducerExample.jsx'
import UseRefExample from './UseRef/UseRefExample1.jsx'
import UseRefExample2 from './UseRef/UseRefExample2.jsx'
const firstele = <h2>This is my new element</h2>
class Ucomponent extends React.Component{
  render(){
    return(
      <div>
        <h2>This is University class Component.</h2>
        <Xcomponent />
      </div>
    )
  }
}
class Xcomponent extends React.Component{
  render(){
    return(
      <h2>This is another class component.</h2>
    )
  }
}
let config = {
    ram : "8gb",
    year : "2025",
    modelno : "25A3P",
    brand : "DELL",
    color : "Grey"
}
let versions = [1.1, 1.2, 1.3]
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/* <EventHandling /> */}
    <UseEffect/>
    <UseState />
    <InlineCSS />
    <ExternalCSS />
    <ModuleCSS />
    <Food pizza="Italian" noodle="Chinese" pav="Indian" />
    <TailwindCSS />
    <Counter />
    <DashboardComponent/>
    <App />
    {/* {firstele} */}
    <Abc/> 
    {/* During rendering dont change the component name 
      2 Types of components 
        a. Function components
        b. Class components       */}
        {/* <NewComponent/> */}
    <JSXBasics/>
    <FileComponent />
    <Ucomponent/>
    <LaptopComponent brand = "HP" color = "Black" con = {config} v = {versions[0]} />
    {/* <UniClassComp name = "LPU" /> */}
    <StudentComp name = "Ranbir" state = "JH" age = {28} course = "ReactJS" />
      <WithoutUseContext/>
      <ProviderComp/>
      <ThemeProvider/>
    <UseReducerExample />
    <UseRefExample/>
    <UseRefExample2/>
    
  </StrictMode>,
)

