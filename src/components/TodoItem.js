import React from "react";
import {
  Avatar,
  Checkbox,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck, deleteTodo} from "../features/todoSlice";
export default function Todoitem(props) {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(props.id));
  };
  const handleDelete =()=>{
      dispatch(deleteTodo(props.id))
  }
  return (
    <div className="todoItem" style={{ color: props.done ? "red" : "white" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Checkbox
              checked={props.done}
              onChange={handleChange}
              color="secondary"
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} />
        <ListItemAvatar>
          <Avatar>
            <IconButton aria-label="delete" color="secondary" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </div>
  );
}
