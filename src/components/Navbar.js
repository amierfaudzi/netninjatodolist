import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';


export default function Navbar() {
    const { todo } = useContext(TodoContext);
    return (
        <div className="navbar">
            <h1>My To Do List</h1>
            <p>Tasks remaining(s) { todo.length }</p>
        </div>
    )
}
