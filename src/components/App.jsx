import React, { useState } from "react";

function App() {
  const [inputData, setInputData] = useState([]);
  const [text, setText] = useState("");

  function HandleChange(event) {
    const newData = event.target.value;
    setText(newData);
  }

  function HandleClick(){
    setInputData((prevData)=>{
      return [...prevData, text];
    });
    setText("");
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
          {inputData.map((data) => {
            return(
              <li>{data}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
