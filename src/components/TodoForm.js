import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoForm() {
    const { dispatch } = useContext(TodoContext);
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", todo: {
            task, deadline
        }});
        setTask("");
        setDeadline("");
    }   

    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="task description" value={task}
            onChange={(e)=> setTask(e.target.value)} required/>
            <input type="text" placeholder="the deadline" value={deadline}
            onChange={(e)=> setDeadline(e.target.value)} required/>
            <input type="submit" value="add a new task"/>
        </form>
    )
}
