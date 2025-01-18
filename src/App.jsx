import React, { useState } from "react";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

function App() {
  const [Todo, setTodo] = useState([]);

  const addList = (inputText) => {
    setTodo([...Todo, { text: inputText, completed: false }]);
  };

  const deleteItem = (index) => {
    const updatedTodo = Todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  const toggleCompletion = (index) => {
    const updatedTodo = [...Todo];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodo(updatedTodo);
  };

  const editItem = (index, newText) => {
    const updatedTodo = [...Todo];
    updatedTodo[index].text = newText;
    setTodo(updatedTodo);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <div className="max-w-lg w-100 mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
        <Header />
        <ToDoItem addList={addList} />
        <ul className="mt-4 space-y-2 ">
          {Todo.map((listItem, i) => (
            <ToDoList
              key={i}
              item={listItem}
              deleteItem={() => deleteItem(i)}
              toggleCompletion={() => toggleCompletion(i)}
              editItem={(newText) => editItem(i, newText)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
