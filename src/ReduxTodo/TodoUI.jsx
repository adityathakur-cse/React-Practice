import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deltodo } from "./TodoSlicer";

const TodoUI = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // get todos from store
  const todos = useSelector((state) => state.todo.todoitem);
  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addtodo(text));
      setText("");
    }
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter todo" className="border p-2 rounded"/>
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 rounded" >
          Add
        </button>
      </div>
      <ul className="w-64">
        {todos.map((item) => (
          <li key={item.id} className="flex justify-between items-center border p-2 mb-2 rounded" >
            <span>{item.text}</span>
            <button onClick={() => dispatch(deltodo(item.id))} className="bg-red-500 text-white px-2 rounded" >
                DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUI;
