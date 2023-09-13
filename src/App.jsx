import {useState} from "react";
import Count from "./pages/count/Count.jsx";
import '../src/App.css'
import Tasks from "./pages/Tasks/Tasks.jsx";
import Connect from "./pages/Connect/Connect.jsx";
import Colors from "./pages/Colors/Colors.jsx";
import Avto from "./pages/Avto/Avto.jsx";

function App() {
    const [block, setBlock] = useState('Counter')
    const btn = (selectBlock) => {
        setBlock(selectBlock)
    }
    return (
        <div>
            <h1>Home work(useRef, useMemo, useContext)</h1>
            <div className='button-block'>
                <div className='button-item'>
                    <button onClick={() => btn('Counter')} className='button-click'>Counter</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Avto')} className='button-click'>Avto</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Connect')} className='button-click'>Connect</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Task')} className='button-click'>Task</button>
                </div>
                <div className='button-item'>
                    <button onClick={() => btn('Colors')} className='button-click'>Colors</button>
                </div>

            </div>
            {block === 'Counter' && <Count/>}
            {block === 'Task' && <Tasks/>}
            {block === 'Connect' && <Connect/>}
            {block === 'Colors' && <Colors/>}
            {block === 'Avto' && <Avto/>}
        </div>
    )
}

export default App
