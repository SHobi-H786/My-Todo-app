'use client'

import { useState } from "react";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";

export default function Home() {
  const [todos, setTodos] = useState([
    { Naat: "Main Banda-e-Asi Hoon", id: 1 },
    { Naat: "Hal-e-Dil kis ko sunaen", id: 2 },
  ]);
  const [inputval, setInput] = useState("");
  const [id, setId] = useState<number | "">(0);

  const addItem = () => {
    if (!inputval.trim() || !id) {
      alert("Both Naat and ID are required!");
      return;
    }

    const existingItem = todos.find((item) => item.id === id);

    if (existingItem) {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, Naat: inputval } : item
        )
      );
      alert("Naat updated successfully!");
    } else {
      setTodos([...todos, { Naat: inputval, id }]);
      alert("Naat added successfully!");
    }

    setInput("");
    setId(0);
  };

  const editItem = (id: number) => {
    const item = todos.find((item) => item.id === id);
    if (item) {
      setInput(item.Naat);
      setId(item.id);
    }
  };

  const delItem = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
    alert("Naat deleted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-green-100 rounded-[60px]">
      <h1 className="text-center text-yellow-600 text-[40px]">My Todo App</h1>

      <div className="flex justify-between gap-4 mt-10">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={inputval}
          placeholder="Write Naat Name"
          className="w-[58%] text-lg p-2 ml-3 border-b focus:outline-none rounded-[20px]"
        />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          placeholder="Write ID"
          className="w-[20%] text-lg p-2 ml-3 border-b focus:outline-none rounded-[20px]"
        />
        <button
          className="bg-green-400 w-[20%] p-2 text-white rounded-[20px] hover:bg-purple-300"
          onClick={addItem}
        >
          Add Naat
        </button>
      </div>

      <h1 className="text-center text-yellow-600 text-[40px] mt-20">Naat List</h1>

      <div className="grid grid-cols-2 gap-4">
        {todos.map((item, i) => (
          <div className="shadow p-4 mt-10 rounded-[40px]" key={item.id}>
            <div className="flex justify-between text-lg">
              <span className="shadow rounded-full text-green-600 h-8 w-8 text-center my-auto">
                {i + 1}
              </span>
              <MdDelete
                onClick={() => delItem(item.id)}
                className="shadow rounded-full h-6 w-6 text-center my-auto cursor-pointer text-red-600 hover:text-red-800"
              />
            </div>
            <div className="mt-10 text-[25px] text-gray-600">{item.Naat}</div>
            <MdOutlineEditNote
              onClick={() => editItem(item.id)}
              className="text-right text-green-600 h-8 w-8 cursor-pointer hover:text-green-800"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
