import '../Connect/Connect.css';
import {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'Connect':
            return {status: true, isPending: false};
        case 'Connecting':
            return {status: false, isPending: true};
        case 'Disconnect':
            return {status: false, isPending: false};
        default:
            return state;
    }
};
const Connect = () => {
    const [conc, dispatch] = useReducer(reducer, {status: false, isPending: false});
    const connect = () => {
        dispatch({type: 'Connecting'});

        setTimeout(() => {
            dispatch({type: 'Connect'});
        }, 3000);
    };

    const disconnect = () => {
        dispatch({type: 'Disconnect'});
    };

    return (
        <div>
            <div className="connect">
                <h3>{conc.isPending ? 'Please wait...' : conc.status ? 'Connected' : 'Disconnected'}</h3>
                {conc.status ? (
                    <button onClick={() => disconnect()}>Disconnect</button>
                    ) : (
                    <button onClick={() => connect()}>Connect</button>
                )}
            </div>
        </div>
    );
};

export default Connect;
