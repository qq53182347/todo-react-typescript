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
        <form onSubmit={handleSubmit} className="stack-small">
            <div className="form-group">
                <label className="todo-label">
                    New name for "{props.name}"
                </label>
                <input
                    className="todo-text"
                    type="text"
                    value={newName}
                    onChange={handleChange}
                />
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn todo-cancel"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label"> {props.name}</label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    Edit
                </button>
                <button  className="btn btn__danger" type="button" onClick={() => props.deleteTask(props.id)} >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}
