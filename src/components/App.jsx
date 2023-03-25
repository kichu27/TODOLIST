import React, { useState } from "react";
import Todoitem from "./ToDoItem";

function App() {
  const [inputtext, setinputtext] = useState("");
  const [items, setitems] = useState([]);

  function handlechange(event) {
    setinputtext(event.target.value);
    console.log(inputtext);
  }

  function handleclick() {
    setitems((prevValue) => {
      return [...prevValue, inputtext];
    });
  }

  function deleteitem(id) {
    setitems((pv) => {
      return items.filter((item, index) => {
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
        <input onChange={handlechange} value={inputtext} type="text" />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((anitem, index) => {
            return (
              <Todoitem
                key={index}
                id={index}
                text={anitem}
                onChecked={deleteitem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
