import { useState } from "react";
import { useTodo } from "../Context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`group flex w-full items-center gap-3 rounded-xl border p-3 transition-all duration-200 sm:gap-4 sm:p-4 ${
        todo.completed
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-zinc-700 bg-zinc-950/70 hover:border-zinc-600 hover:bg-zinc-950"
      }`}>
      {/* Checkbox */}
      <input
        type="checkbox"
        className="h-5 w-5 shrink-0 cursor-pointer accent-orange-500"
        checked={todo.completed}
        onChange={toggleCompleted}
        aria-label={`Mark ${todo.todo} as ${
          todo.completed ? "incomplete" : "complete"
        }`}
      />

      {/* Todo Text */}
      <input
        type="text"
        className={`min-w-0 flex-1 rounded-lg border bg-transparent px-2 py-2 text-sm outline-none transition-all duration-200 sm:text-base ${
          isTodoEditable
            ? "border-orange-500/50 text-white focus:ring-2 focus:ring-orange-500/10"
            : "border-transparent text-zinc-200"
        } ${todo.completed ? "text-emerald-500 line-through opacity-60" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        aria-label="Todo description"
      />

      {/* Edit / Save Button */}
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10 text-base transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/20 disabled:cursor-not-allowed disabled:opacity-30"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
        aria-label={isTodoEditable ? "Save todo" : "Edit todo"}
        title={isTodoEditable ? "Save" : "Edit"}>
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10 text-sm transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
        title="Delete">
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
