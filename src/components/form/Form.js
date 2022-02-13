import React from 'react';
import "./Form.css";

const Form =(props)=>{

    const handleInput = (e)=>{
        setTask(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.saveTask(task);
        setTask("");
        
    }
    const [task, setTask] = React.useState("");
    return(
        <div id = "main-form">
            <h2>Todomatic</h2>
            <form className='form' onSubmit={handleSubmit}> 
                <input type="text" data-testid="task-input" placeholder='Enter task name' id="task-input" value={task} onChange={handleInput} />
                <button type='submit' data-testid="save-btn" id="save-btn">Save</button>
            </form>
        </div>
    );
}

export default Form;