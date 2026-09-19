import { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo({ todo: todo.trim(), completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex w-full gap-3">
      <input
        type="text"
        placeholder="Write a task..."
        className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-zinc-600 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="shrink-0 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:bg-orange-400 active:scale-95 sm:px-7">
        + Add
      </button>
    </form>
  );
}

export default TodoForm;
