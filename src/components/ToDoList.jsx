import React, { useState } from "react";

function ToDoList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.item.text);

  const handleSave = () => {
    props.editItem(editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-3 bg-green border rounded-lg shadow-sm hover:shadow-md">
      <div className="flex items-center gap-2 ">
     
        {props.item.completed ? (
          <div className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full" onClick={props.toggleCompletion}>
            <i className="fa-solid fa-check"></i>
          </div>
        ) : (
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-green-600 rounded-md"
            checked={props.item.completed}
            onChange={props.toggleCompletion}
          />
        )}

       
        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
            />
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save
            </button>
          </div>
        ) : (
          <span
            className={`cursor-pointer ${
              props.item.completed ? "line-through text-gray-500 ml-3" : ""
            }`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {props.item.text}
          </span>
        )}
      </div>

      
      <div className="flex items-center gap-3 text-gray-600">
        {!isEditing && (
          <i
            className="fa-solid fa-pencil-alt cursor-pointer hover:text-green-500"
            onClick={() => setIsEditing(true)}
          ></i>
        )}
        <i
          className="fa-solid fa-trash-can cursor-pointer hover:text-red-500"
          onClick={props.deleteItem}
        ></i>
      </div>
    </li>
  );
}

export default ToDoList;
