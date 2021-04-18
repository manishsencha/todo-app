import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import { Button, TextField } from "@material-ui/core";

export default function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    if (input !== "") {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
      setInput("");
    }
  };
  return (
    <div className="input">
      <TextField
        id="input"
        label="Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoComplete="off"
      />
      <div>
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add!
        </Button>
      </div>
    </div>
  );
}
