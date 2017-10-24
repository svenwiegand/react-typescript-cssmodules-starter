import { createStore, StoreEnhancer } from 'redux';
import { Store } from 'react-redux';
import { State, Reducer, initialState } from './AppState';

interface WindowWithReduxDevTools {
    __REDUX_DEVTOOLS_EXTENSION__: StoreEnhancer<State>;
}

function reduxDevToolsEnhancer(): StoreEnhancer<State> | undefined {
    /* tslint:disable-next-line */
    const scope: any = window;
    /* istanbul ignore next */
    if ((<WindowWithReduxDevTools> scope).__REDUX_DEVTOOLS_EXTENSION__) {
        return scope.__REDUX_DEVTOOLS_EXTENSION__();
    } else {
        return undefined;
    }
}

export default <Store<State>> createStore(Reducer, initialState, reduxDevToolsEnhancer());