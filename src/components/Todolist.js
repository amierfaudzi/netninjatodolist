import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';

export default function Todolist() {
    const { todo } = useContext(TodoContext);
    return todo.length ? (
        <div className="todo-list">
            <ul>
                { todo.map( task => {
                    return ( <TodoDetails todo={task} key={todo.id}/>)
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            No task remains. Start grinding!
        </div>
    )
}
