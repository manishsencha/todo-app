import React from "react";
import "./App.css";
import Input from "./components/Input";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import Todoitem from "./components/TodoItem";
import { List } from "@material-ui/core";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Todo App</h1>
            <Input />
      <div className="app__container">
        <div className="app__todoContainer">
          <List>
            {todoList.map((item) => (
              <Todoitem name={item.item} id={item.id} done={item.done} />
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
