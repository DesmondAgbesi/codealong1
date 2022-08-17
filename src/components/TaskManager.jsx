import { useEffect, useState } from "react";

import { v4 as uuid} from "uuid";

import TaskItem from "./TaskItem";


export const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks) return [];
    return JSON.parse( tasks);
  });
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask ={
      id: uuid(),
      text: input,
      completed: true,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

    useEffect(() =>{
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

  return(
    <div className="h-screen bg-blue-600 flex justify-center items-center">
      <div className=" max-w-xl bg-white max-h-96 rounded-xl py-10 px-5"> 
        <form onSubmit={handleSubmit} className="space-x-5 flex w-[30rem] mb-10" >
          <input onChange = {(e) => setInput(e.target.value)} value ={input} placeholder="Input a task here" type="text" className="border-blue-400 rounded-md outline-none border-2 p-2 w-10/12" />
          <button type="submit" disable={input===""} className="bg-blue-600 py-2 px-5 rounded-md text-white text-lg w-2/12" >Add</button>  
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
          {
            tasks.map((task) => (
          <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
            ))
          }
        </div>
      </div> 
    </div>
  )
}

