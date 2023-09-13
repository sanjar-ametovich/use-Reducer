import {useReducer} from 'react';
import '../Colors/Colors.css'
const reducer = (state, action) => {
    switch (action.type) {
        case 'kill':
            return state.map(item => {
                if (item.id === action.id) {
                    return {...item, check: true};
                }
                return item;
            });
        case 'reset':
            return state.map(item => {
                return {...item, check: false};
            });
    }
};
const Colors = () => {
    const [colors, dispatch] = useReducer(reducer, [
        {color: 'Red', id: 0, check: false},
        {color: 'Blue', id: 1, check: false},
        {color: 'Purple', id: 2, check: false},
        {color: 'Green', id: 3, check: false},
        {color: 'White', id: 4, check: false},
        {color: 'Pink', id: 5, check: false},
        {color: 'Orange', id: 6, check: false},
    ]);
    return (
        <div>
            <div className="colors">
                <ul className="colors-list">
                    {colors.map((item) => (
                        <li key={item.id}>
                            <p className={item.check ? 'check' : ''}>{item.color}</p>
                            <button onClick={() => dispatch({type: 'kill', id: item.id})}>Kill</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => dispatch({type: 'reset'})} className="reset">Reset</button>
            </div>
        </div>
    );
};
export default Colors;
