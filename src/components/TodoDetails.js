import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
//want context here to be able to use the delete function

export default function TodoDetails({ todo }) {
    const { dispatch } = useContext(TodoContext);
    return (
        <li onClick={()=> dispatch({type: "REMOVE_TODO", id : todo.id})}>
            <div className="task">{ todo.task }</div>
            <div className="deadline">{ todo.deadline }</div>
        </li>
    )
}
