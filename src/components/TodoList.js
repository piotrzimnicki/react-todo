import React from "react";
import {SingleTask} from "./SingleTask";

export const TodoList = ({todos, setTodos, filteredTodos, message, setMessage}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo =>
                    <SingleTask
                        message={message}
                        setMessage={setMessage}
                        text={todo.text}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                    />
                )}
            </ul>
        </div>
        )
}