import React, {useReducer} from 'react'

const UseReducerExample = () => {
    const initialCartState = {count : 0}
    const reducerCart = (state, action) => {
        switch(action.type){
            case 'addCart' : 
                return {count:state.count+1};
            case 'removeCart' : 
                return {count:state.count > 0 ? state.count - 1 : 0};
            case 'resetCart' : 
                return initialCartState;
            default :
                return state;
        }
    }
    const [cartState, dispatchCart] = useReducer(reducerCart, initialCartState);
    return (
      <div className='bg-blue-600 p-2'>
        <h2>Cart : {cartState.count}</h2>
        <button onClick={() => dispatchCart({type:'addCart'})}>Add to Cart</button>
        <button onClick={() => dispatchCart({type:'removeCart'})}>Remove from Cart</button>
        <button onClick={() => dispatchCart({type:'resetCart'})}>Reset Cart</button>
      </div>
    )
}

export default UseReducerExample