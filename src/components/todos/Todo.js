import React from 'react';

import "./Todo.css";
const Todo=(props)=>{

    const [editPageOpened, setEditPageOpened] = React.useState(false);
    const [newName, setnewName] = React.useState(props.name);

    const editInputRef = React.useRef(null);

    const openPage=(command)=>{
        if(command === "edit"){ //goto edit page
            setEditPageOpened(true);
        }    
        else{ //return to view page
            if(command === "cancel"){ //cancel
                setnewName(props.name);
            }
            else{ //save new name
                props.editName(props.id, newName);
            }
            setEditPageOpened(false);    
        }
    }

    const handleChange=(e)=>{
        setnewName(e.target.value);
    }

    const editTemplate = (
        <div className='todo'>
            <div className = "todo-obj">
                <input type="text" data-testid="edit-input" className="edit-input" placeholder='Edit Task' value={newName} onChange={handleChange} ref={editInputRef}/>
            </div>
            <div className="actions">
                <button className="cancel" data-testid="edit-btn" onClick={()=>openPage("cancel")}>Cancel</button>
                <button className="save" data-testid="save-btn" onClick={()=>openPage("save")} >Save</button>
            </div>
        </div>
    );

    const viewTemplate = (
        <div className="todo" id = {props.id}>
            <div className = "todo-obj">
                <input className="completed" data-testid="c-box" type="checkbox" checked={props.completed} onChange={()=>props.toggleCompleted(props.id)}/>
                <label className="todo-name" data-testid="task-name">{props.name}</label>
            </div>
            <div className="actions">
                <button className="edit" data-testid="edit-btn" onClick={()=>openPage("edit")}>Edit</button>
                <button className="delete" onClick={()=>props.deleteTask(props.id)}>Delete</button>
            </div>
        </div>
    );
    React.useEffect(()=>{
        if(editPageOpened) {
            editInputRef.current.focus();
        }    
    },[editPageOpened]);

    return editPageOpened ? editTemplate : viewTemplate;

    
}

export default Todo;