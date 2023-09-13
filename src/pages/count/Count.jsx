import {useReducer, useState} from 'react';
import '../count/Count.css'
const reducer = (state, action) => {
    switch (action.type) {
        case 'plus':
            return {count: state.count + 1};
        case 'minus':
            return {count: state.count - 1};
        default:
            return state;
    }
};

const Count = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const [show,setShow] = useState(false)
    const increment = () => {
        dispatch({type: 'plus'});
    };

    const decrement = () => {
        dispatch({type: 'minus'});
    };
    const showHide = ()=>{
        setShow(item=>!item)
    }
    return (
        <div>
            <div className="counter">
                <button onClick={showHide}>Toggle hidden</button>
                <div className={`counter-block ${show ? 'show' : 'hide'}`}>
                    <button onClick={increment}>Increment</button>
                    <h3>{state.count}</h3>
                    <button onClick={decrement}>Decrement</button>
                </div>
            </div>
        </div>
    );
};

export default Count;
