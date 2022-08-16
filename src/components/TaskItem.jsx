// import React, {useState} from "react";
import {TrashIcon}  from '@heroicons/react/outline';

function TaskItem({task, handleDelete}) {
  return(
    <div className="flex items-center bg-teal-100 p-2 border-2 rounded-md border-gray-300">
      <div className="flex-1">{task}</div>
      <button className="bg-blue-800 p-2 rounded-md" onClick={() => handleDelete(task)}>
         <TrashIcon height={19} color="white"  />
      </button>
    </div>
  );
}


export default TaskItem;