import './Food.css'

function Food(prop){
    return(
        <div className='fav'>
            <p className='food1'>Pizza <br /> {prop.pizza}</p>
            <p className='food2'>Noodles <br /> {prop.noodle}</p>
            <p className='food3'>Pav Bhaji <br /> {prop.pav}</p>
        </div>
    )
}
export default Food