import { FunctionComponent, useState } from 'react';
import { TodoTaskList } from "./components/TodoTaskList";
import { TaskForm } from "./components/TaskForm";
import { TodoButtons } from "./components/TodoButtons";
import { TodoItem } from "./components/types"

interface Props {
    tasks: TodoItem[];
}

type filterOptions = {
    [key: string]: any
}

export const App: FunctionComponent<Props> = (props) => {

    const [tasks, setTasks] = useState<TodoItem[]>(props.tasks);
    const [filter, setFilter] = useState<string>("All");

    const filterMap: filterOptions = {
        All: () => true,
        Active: (task: TodoItem) => !task.completed,
        Completed: (task: TodoItem) => task.completed
    };
    const filterNames = Object.keys(filterMap);

    let addTask = (name: string) => {
        const newTask: TodoItem = { id: `todo-${new Date().getTime()}`, name: name, completed: false };
        setTasks([...tasks, newTask]);
    };

    let toggleTaskCompleted = (id: string) => {
        const updatedTasks: TodoItem[] = tasks.map(task => {
            return id === task.id ? { ...task, completed: !task.completed } : task
        });
        setTasks(updatedTasks);
    };

    let editTask = (id: string, newName: string) => {
        const editedTaskList: TodoItem[] = tasks.map(task => {
            return id === task.id ? { ...task, name: newName } : task
        });
        setTasks(editedTaskList);
    };

    let deleteTask = (id: string) => {
        const remainingTasks: TodoItem[] = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    };

    return (
        <>
            <TaskForm addTask={addTask} />
            <TodoButtons filterNames = {filterNames} setFilter = {setFilter}/>
            <TodoTaskList tasks={tasks} filterMap={filterMap} filter={filter}
                          toggleTaskCompleted={toggleTaskCompleted} editTask={editTask}
                          deleteTask={deleteTask}/>
        </>
    );
}

export default App;
