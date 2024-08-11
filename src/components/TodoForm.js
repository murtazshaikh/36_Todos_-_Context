import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { todos, addTodo } = useTodo();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  console.log(todos, "todos");

  return (
    <form onSubmit={addTodoHandler} className="flex">
      <input
        type="text"
        name="todo"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
