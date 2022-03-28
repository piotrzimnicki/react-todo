import React from "react";
import {uid} from "../utils/IdGenerator";
import './styles/css/fontello.css'
export const Form = ({inputText, setInputText, todos, setTodos, setStatus, message, setMessage}) => {

    const inputTextHandler = e => {
        if (e.target.value.length > 3) setMessage(false);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();

        if (inputText.length < 4) {
            return setMessage(true)
        } else {
            setMessage(false);
        }

        setTodos([
            ...todos, {text: inputText, completed: false, id: uid()}
        ]);
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <div>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="icon-plus"></i>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            {message ? <p className="message">Please enter at least 4 characters.</p> : null}
        </form>
    )
}