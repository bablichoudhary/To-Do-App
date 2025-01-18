import { useState } from "react";

function ToDoItem(props) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex items-center gap-2 mb-4 justify-center ">
     
      <input
        type="text"
        placeholder="Enter Your To-Do"
        className="flex w-60 p-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />

     
      <button
        className="p-2 bg-orange-600 text-white rounded-md hover:bg-green-500 focus:outline-none text-xl w-9"
        onClick={() => {
          if (inputText.trim() === "") {
            alert("Please enter a valid to-do item.");
            return;
          }

          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default ToDoItem;
