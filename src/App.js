import React, {useEffect, useState} from "react";
import './App.css';
import {Form} from "./components/Form";
import {TodoList} from "./components/TodoList";

export function App() {
    const [inputText, setInputText] = useState('');
    const [todos,setTodos] = useState([]);
    const [status,setStatus] = useState('all');
    const [filteredTodos,setFilteredTodos] = useState([]);
    const [message, setMessage] = useState(false)
    useEffect(()=> {
        getLocalTodos();
    },[])

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    },[todos,status])

    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    const getLocalTodos = () => {
        if(localStorage.getItem('todos')) setTodos(JSON.parse(localStorage.getItem('todos')));
    }

    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                message={message}
                setMessage={setMessage}
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}

            />
            <TodoList
                message={message}
                setMessage={setMessage}
                filteredTodos={filteredTodos}
                todos={todos}
                setTodos={setTodos} />
        </div>
    );
}
