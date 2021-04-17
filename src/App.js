import React from "react";
import "./App.css";
import Input from "./components/Input";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import Todoitem from "./components/TodoItem";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <Todoitem name={item.item} id={item.id} done={item.done} />
          ))}
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;
