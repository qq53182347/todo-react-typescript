import "./TaskFilter.css";
const TaskFilter = (props)=>{
    return(
        <div className="task-filter">
            <button id="all-btn" className={props.filterValue === 0? "btn-active": ""} onClick={()=>props.setFilter(0)}>All</button>
            <button  id="complete-btn" className={props.filterValue === 1? "btn-active": ""} onClick={()=>props.setFilter(1)}>Complete</button>
            <button id="incomplete-btn" className={props.filterValue === 2? "btn-active": ""} onClick={()=>props.setFilter(2)}>Incomplete</button>
        </div>
    );
}

export default TaskFilter;