import { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo,setToDo] = useState([]);
  const [text,setText] = useState("")
  const [isUpdate,setIsUpdate] = useState(false);
  const [toDoId,setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo)
  },[]);

  const updateMode = (_id, text) => {
    setIsUpdate(true)
    setText(text)
    setToDoId(_id)
  }
  
  return (
      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
          <input type="text" placeholder="Add To Do" value={text} onChange={(e) => setText(e.target.value)}></input>

          <div className="add" 
          onClick={isUpdate ? 
          () => updateToDo(toDoId, text, setToDo, setText, setIsUpdate) 
          : () => addToDo(text, setText, setToDo)}>
          {isUpdate ? "Update" : "ADD" } </div>
        </div>

        <div className="list">
          {toDo.map((item) => <ToDo 
          key={item._id} 
          text = {item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)} />)}
          
        </div>
      </div>
  );
}

export default App;
