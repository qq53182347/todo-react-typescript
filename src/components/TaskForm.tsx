import { ChangeEvent, FunctionComponent, useState } from "react";

interface Tasks {
    addTask: (name: string) => void
}

export const TaskForm: FunctionComponent<Tasks> = (tasks) => {

    const [name, setName] = useState<string>("");

    let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    let handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        tasks.addTask(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit} >
            <h1 className="label-wrapper">TodoMatic</h1>
            <h2>
                <label className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                name="text"
                value={name}
                className="input input__lg"
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form >
    );
}