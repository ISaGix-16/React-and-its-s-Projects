import { useEffect, useState } from "react";
import { TodoProvider } from "./Context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos && storedTodos.length > 0 ? storedTodos : [];
  });

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.length - completedTodos;

  return (
    <TodoProvider
      value={{ addTodo, deleteTodo, todos, toggleComplete, updateTodo }}>
      <div className="min-h-screen bg-[#09090b] px-4 py-12 text-white sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          {/* Header */}
          <header className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                Stay focused
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Manage Your <span className="text-orange-500">Todos</span>
            </h1>

            <p className="mt-3 text-sm text-zinc-500 sm:text-base">
              Organize your day. Get things done.
            </p>
          </header>

          {/* Main Card */}
          <main className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl shadow-black/30">
            {/* Form Section */}
            <div className="border-b border-zinc-800 p-5 sm:p-7">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Add a new task
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  What's on your mind today?
                </p>
              </div>

              <TodoForm />
            </div>

            {/* Todo Statistics */}
            <div className="grid grid-cols-3 gap-3 border-b border-zinc-800 bg-zinc-950/50 p-4 sm:p-5">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-center">
                <p className="text-2xl font-bold text-white">{todos.length}</p>
                <p className="mt-1 text-xs text-zinc-500">Total tasks</p>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 text-center">
                <p className="text-2xl font-bold text-orange-400">
                  {pendingTodos}
                </p>
                <p className="mt-1 text-xs text-zinc-500">Pending</p>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
                <p className="text-2xl font-bold text-emerald-400">
                  {completedTodos}
                </p>
                <p className="mt-1 text-xs text-zinc-500">Completed</p>
              </div>
            </div>

            {/* Todo List */}
            <div className="p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Your tasks</h2>

                <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                  {todos.length} {todos.length === 1 ? "task" : "tasks"}
                </span>
              </div>

              {todos.length === 0 ? (
                <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-950/50 px-4 py-12 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-2xl">
                    📝
                  </div>

                  <h3 className="text-base font-semibold text-zinc-200">
                    No tasks yet
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Add your first task above and start getting things done.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {todos.map((todo) => (
                    <div key={todo.id} className="w-full">
                      <TodoItem todo={todo} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-8 text-center">
            <p className="text-xs text-zinc-600">
              Your tasks are saved locally in your browser.
            </p>
          </footer>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
