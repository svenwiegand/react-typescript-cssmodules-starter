import { createStore } from 'redux';
import { Store } from 'react-redux';
import { State, Reducer, initialState } from './AppState';
import { reduxDevToolsEnhancer } from 'typed-redux-actions';

export default <Store<State>> createStore(Reducer, initialState, reduxDevToolsEnhancer());