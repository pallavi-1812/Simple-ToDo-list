import React, { useState } from "react";
import ToDoItem from './toDoitem'

function App() {
  const [inputData, setInputData] = useState([]);
  const [text, setText] = useState("");

  function HandleChange(event) {
    const newData = event.target.value;
    setText(newData);
  }

  function HandleClick() {
    setInputData((prevData) => {
      return [...prevData, text];
    });
    setText("");
  }

  function DeleteItem(id) {
    setInputData((prevData) => {
      return prevData.filter((data, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={HandleChange} value={text} />
        <button onClick={HandleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputData.map((data, index) => {
            return (
              <ToDoItem key={index} id={index} text={data} onChecked={DeleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
