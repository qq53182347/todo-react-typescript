import { FunctionComponent } from "react";
import { TodoItem } from "./types"
import { TaskItem } from "./TaskItem";

interface Props {
    tasks: TodoItem[],
    filterMap: any,
    filter:string,
    toggleTaskCompleted: (id: string) => void,
    editTask: (id: string, newName: string) => void,
    deleteTask: (id: string) => void;
}

export const TodoTaskList: FunctionComponent<Props> = (props) => {

    const taskList = props.tasks
        .filter(props.filterMap[props.filter])
        .map(task => (
            <TaskItem
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={props.toggleTaskCompleted}
                deleteTask={props.deleteTask}
                editTask={props.editTask}
            />
        ));

    return(
    <div>
        <h2>tasks</h2>
        <ul>{taskList}</ul>
    </div>
    );
}
