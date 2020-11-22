import { v4 as uuidv4 } from 'uuid';

export const todoReducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return [...state, {
                task: action.todo.task,
                deadline: action.todo.deadline,
                id: uuidv4()
            }]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.id)
        default: 
            return state
    }
}