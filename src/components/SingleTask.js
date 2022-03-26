import React from "react";
import {logDOM} from "@testing-library/react";
export const SingleTask = ({text,todos,setTodos,todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map(el => {
            if(el.id === todo.id) {
                return {...el, completed: !el.completed}
            }
            return el;
        }))
    }
    return (
        <li className="todo">
            <div className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</div>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button
                onClick={deleteHandler}
                className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </li>
    )
}