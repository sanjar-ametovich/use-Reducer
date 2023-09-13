import {useReducer} from "react";
import "./Avto.css";
const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state.map((item) => {
                if (item.feature === action.feature.feature) {
                    return {...item, checked: true};
                }
                return item;
            });
        case 'delete':
            return state.map((item) => {
                if (item.feature === action.feature.feature) {
                    return {...item, checked: false};
                }
                return item;
            });
    }
};
const Avto = () => {
    const [avto, dispatch] = useReducer(reducer, [
        {feature: "Premium sound system (+500)", price: 500, checked: false},
        {feature: "V-6 engine (+1500)", price: 1500, checked: false},
        {feature: "Rear spoiler (+250)", price: 250, checked: false},
        {feature: "Racing detail package (+1500)", price: 1500, checked: false},
    ]);
    const addFeature = (feature) => {
        dispatch({type: "add", feature});
    };
    const deleteFeauture = (feature) => {
        dispatch({type: 'delete', feature})
    }
    const totalPrice = avto.reduce((acc, item) => {
        if (item.checked) {
            return acc + item.price;
        }
        return acc;
    }, 26395);
    return (
        <div>
            <div className="avto">
                <div className="avto-left">
                    <img src="https://hw-use-layyout-effect-use-reduser.vercel.app/images/nexia3.png" alt="Car"/>
                    <p>Amount: ${totalPrice}</p>
                    <h2>Added features:</h2>
                    <ul>
                        {avto.map((item, index) => {
                            if (item.checked) {
                                return <li key={index}>
                                    <button onClick={() => deleteFeauture(item)}> X</button>
                                    {item.feature}
                                </li>;
                            }
                        })}
                    </ul>
                </div>
                <div className="avto-right">
                    <h2>Additional Features</h2>
                    <ul>
                        {avto.map((item, index) => {
                            if (!item.checked) {
                                return (
                                    <li key={index}>
                                        <button onClick={() => addFeature(item)} className="add-button">
                                            Add
                                        </button>
                                        {item.feature}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    <h2>Total amount: 26395</h2>
                </div>
            </div>
        </div>
    );
};
export default Avto;
