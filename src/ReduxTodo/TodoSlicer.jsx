import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todoitem: JSON.parse(localStorage.getItem("todolist")) || [{ id: 1, text: "Item1" }]
};
export const TodoSlicer = createSlice({
    name: "TodoList",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const newtodoitem = {
                id: nanoid(),
                text: action.payload
            };
            state.todoitem.push(newtodoitem);
            localStorage.setItem("todolist", JSON.stringify(state.todoitem))
        },
        deltodo: (state, action) => {
            state.todoitem = state.todoitem.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem("todolist", JSON.stringify(state.todoitem));
        }
    }
});

export const { addtodo, deltodo } = TodoSlicer.actions;
export default TodoSlicer.reducer;
