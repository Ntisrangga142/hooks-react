import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoList/todoContext.js";

function TodoList() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="space-y-4">
      {state.map((todo, index) => (
        <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow">
          <h1 className={`text-xl font-bold ${todo.status ? "line-through text-gray-400" : "text-gray-800"}`}>{todo.name}</h1>

          <div className="flex space-x-2">
            <button onClick={() => dispatch({ type: "TOOGLE_TODO", value: { index } })} className={`px-3 py-1 rounded-lg text-white ${todo.status ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"}`}>
              {todo.status ? "Belum Selesai" : "Selesai"}
            </button>

            <button onClick={() => dispatch({ type: "DELETE_TODO", value: { index } })} className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white">
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
