import sty from './ModuleCSS.module.css'
// console.log(sty)
function ModuleCSS(){
    return(
        <div className = {sty.mystyle}>
            <h1>This is CSS Module example.</h1>
            
        </div>
    )
}
export default ModuleCSS