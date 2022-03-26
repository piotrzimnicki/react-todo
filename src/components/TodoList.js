import React from "react";
import {SingleTask} from "./SingleTask";

export const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <SingleTask
                        text={todo.text}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
        )
}