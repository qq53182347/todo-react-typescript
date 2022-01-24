import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoItem } from "./components/types"
import todoListJson from './mocks/todo-list-json.json';

const DATA: TodoItem[] = todoListJson;

ReactDOM.render(
    <React.StrictMode>
        <App tasks={DATA}/>
    </React.StrictMode>,
    document.getElementById('root')
);

