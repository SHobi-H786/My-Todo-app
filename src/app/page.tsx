'use client'
import Image from "next/image";
import { useState } from "react";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";

export default function Home() {
  // define states
  const [todos, setTodos] = useState([
    { Naat: "Main Banda-e-Asi Hoon", id: 1 },
    { Naat: "Hal-e-Dil kis ko sunaen", id: 2 }
  ]);

  const [inputval,setInput] = useState("");
  const [id,setId] = useState(0);
  
  // function

  const addItem = ()=>{
    let obj:any = todos.find(item => item.id ==id )

    if(obj){
      let newArray = todos.filter(item => item.id !== obj.id)
      setTodos([...newArray,{Naat:inputval,id:id}])
      setInput("")
      setId(0)
      return
    }

    setTodos([...todos,{Naat:inputval,id:id}])
    setInput("")
    setId(0)
  };

  const editItem = (id:any)=>{
    

    let obj:any = todos.find(item => item.id ==id )
    setInput(obj.Naat);
    setId(obj.id);
    console.log(obj);
  };

  const delItem = (id:any) => {
    let newArray = todos.filter(item => item.id !== id)
    setTodos([...newArray]);
  }

  return (
    <div className="max-w-4xl mx-auto p-5 bg-green-100 rounded-[60px]">
      <h1 className="text-center text-yellow-600 text-[40px]"> My Todo App </h1>

      {/* input div start */}
      <div className="flex justify-between gap-4 mt-10">
        <input type="text" 
        onChange={(e)=> setInput(e.target.value)}
        value={inputval} 
        placeholder="write Naat Name" 
        className="w-[58%]  text-lg p-2 ml-3 border-b focus:outline-none rounded-[20px]" />
        <input 
        type="number"
        value={id} 
        onChange={(e:any)=>setId(e.target.value)}
        placeholder="write id" 
        className="w-[20%]  text-lg p-2 ml-3 border-b focus:outline-none rounded-[20px]" />
        <button className="bg-green-400 w-[20%] p-2 text-white rounded-[20px] hover:bg-purple-300" onClick={addItem}>Add Naats</button>
      </div>
      {/* input div End  */}

      <h1 className="text-center text-yellow-600 text-[40px] mt-20"> Naat List </h1>

      {/* Naat List */}
      {/* Grid item */}


      <div className="grid grid-cols-2 gap-4">
        {
          todos.map((item: any, i: any) => {
            return (
              <div className="shadow p-4 mt-10 rounded-[40px]" key={i}>
                <div className="flex justify-between text-lg">
                  <span className="shadow rounded-full text-green-600 h-8 w-8 text-center my-auto">{i+1}</span>

                  <MdDelete onClick={()=>delItem(item.id)} className="shadow rounded-full h-6 w-6 text-center my-auto cursor-pointer text-red-600" />
                </div>
                {/* Data Div */}
                <div className="mt-10 text-[25px] text-gray-600">
                  {item.Naat}
                </div>
                <div>
                  
                <MdOutlineEditNote onClick={()=>editItem(item.id)} className="text-right text-green-600 h-8 w-8 cursor-pointer" />
                </div>
              </div>
            )
          })
        }


        <div className="mt-10"></div>
      </div>

    </div>
  );
}
