import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice = createSlice({
    name : "counter",
    initialState : {count : 0},
    reducers : {
        incre : (state) => {state.count+=1},
        decre : (state) => {state.count-=1},
        reset : (state) => {state.count=0},
        addbyNum : (state, action) => {
            state.count += Number(action.payload)
        }
    }
})

export const {incre, decre, reset, addbyNum} = CounterSlice.actions;
export default CounterSlice.reducer
