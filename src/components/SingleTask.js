import React, {useState} from "react";

export const SingleTask = ({text,todos,setTodos,todo, message, setMessage}) => {
    const [edit,setEdit] = useState(false);
    const deleteHandler = () => {
        if(edit) return;
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const completeHandler = () => {
        if(edit) return;
        setTodos(todos.map(el => {
            if(el.id === todo.id) {
                return {...el, completed: !el.completed}
            }
            return el;
        }))
    }
    const editHandler = () => {
        if(message) return;
        edit ? setEdit(false) : setEdit(true)
    }
    const editTextOnChange = e => {
       e.target.value.length < 4 ? setMessage(true) : setMessage(false);
        setTodos(todos.map(el => {
            if(el.id === todo.id) {
                 el.text = e.target.value
            }
            return el
        }))
    }
    return (
        <li className="todo">
            {edit ?
                <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
                    <input autoFocus onChange={editTextOnChange} value={text} type="text"/>
                </div>
                :
                <div className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</div>
            }
            <button onClick={editHandler} className="complete-btn"><i className="icon-edit"></i></button>
            <button onClick={completeHandler} className="complete-btn"><i className="icon-ok"></i></button>
            <button
                onClick={deleteHandler}
                className="trash-btn">
                <i className="icon-trash-empty"></i>
            </button>
        </li>
    )
}