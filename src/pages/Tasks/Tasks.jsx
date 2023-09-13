import '../Tasks/Tasks.css'
import {useReducer, useState} from "react";

const reducer = (state,action)=>{
    switch (action.type){
        case 'addTask':
            return[...state,action.payload]
        case 'removeTask':
            return state.filter((task, index) => index !== action.payload);
    }
}

const Tasks = () => {
    const [tasks,dispatch] = useReducer(reducer,[])
    const [task,setTask] = useState('')


    const addNewTasks = ()=>{
        dispatch({type:'addTask',payload:task})
    }
    const removeTasks = (index)=>{
        dispatch({type:'removeTask', payload:index})
    }

    return (
        <div>
            <div className="tasks">
                <div className="tasks-block">
                    <input type="text" onChange={(e)=>setTask(e.target.value)}/>
                    <button onClick={addNewTasks}>Add</button>
                </div>
                <ul className="tasks-list">
                    {tasks.map((item, index) => (
                        <li className="tasks-list-item" key={index}>
                            <p>{item}</p>
                            <button onClick={() => removeTasks(index)}>Remove</button>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Tasks;
