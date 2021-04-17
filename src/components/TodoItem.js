import { Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'
import './TodoItem.css'
import {useDispatch} from 'react-redux'
import {setCheck} from '../features/todoSlice'
export default function Todoitem(props) {
    const dispatch = useDispatch();
    const handleChange = () =>{
        dispatch(setCheck(props.id));
    }
    return (
       <div className="todoItem">
        <FormControlLabel
        control={<Checkbox checked={props.done} onChange={handleChange} color ="secondary" />}
        label={props.name}
      />
       </div>
    )
}
