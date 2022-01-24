import { ChangeEvent, FunctionComponent, useState } from "react";
import { TodoItem } from "./types"

interface Props extends TodoItem {
    toggleTaskCompleted: (id: string) => void,
    editTask: (id: string, newName: string) => void,
    deleteTask: (id: string) => void;
}

export const TaskItem: FunctionComponent<Props> = (props) => {

    const [isEditing, setEditing] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>(props.name);


    let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }

    let handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.editTask(props.id, newName.trim() !== "" ? newName : "(new todo task)");
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    New name for "{props.name}"
                </label>
                <input
                    type="text"
                    value={newName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                    <span>renaming {props.name}</span>
                </button>
                <button type="submit">
                    Save
                    <span>new name for {props.name}</span>
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div >
            <div>
                <input
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label> {props.name}</label>
            </div>
            <div >
                <button type="button" onClick={() => setEditing(true)}>
                    Edit <span>{props.name}</span>
                </button>
                <button type="button" onClick={() => props.deleteTask(props.id)} >
                    Delete <span>{props.name}</span>
                </button>
            </div>
        </div>
    );

    return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}
