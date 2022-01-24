import { ChangeEvent, FunctionComponent, useState } from "react";

interface Props {
    addTask: (name: string) => void
}

export const TaskForm: FunctionComponent<Props> = (props) => {

    const [name, setName] = useState<string>("");

    let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    let handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.addTask(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit} >
            <h1>TodoMatic</h1>
            <h2>
                <label>
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                name="text"
                value={name}
                onChange={handleChange}
            />
            <button type="submit">
                Add
            </button>
        </form >
    );
}