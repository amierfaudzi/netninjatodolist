import React, { createContext, useReducer, useEffect} from 'react';
import { todoReducer } from '../reducers/todoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    //state that will be shared
    const [todo, dispatch] = useReducer(todoReducer, [], ()=> {
        const localData = localStorage.getItem('todo');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(()=> {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])
    return (
        <TodoContext.Provider value={{todo, dispatch}} >
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;