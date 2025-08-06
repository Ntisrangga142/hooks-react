import { useContext, useState } from "react";
import { TodoContext } from "../../../contexts/TodoList/todoContext.js";

function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", value: { name: text } });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-[25px] mt-[25px] ">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Tambahkan todo baru..." className=" w-full mr-[25px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Tambah
      </button>
    </form>
  );
}

export default TodoForm;
