import { ActionReducer } from 'typed-redux-actions';
import { ActionType, filter } from './AppAction';

export interface State {
    readonly enthusiasm: number;
}

export const initialState: State = {
    enthusiasm: 1
};

const reducer = new ActionReducer(filter, initialState, (state: State, action: typeof filter.action) => {
   switch (action.type) {
       case ActionType.enthusiasmIncrease: return { enthusiasm: state.enthusiasm + action.increase };
       case ActionType.enthusiasmDecrease: return { enthusiasm: state.enthusiasm - action.decrease };
   }
});

export const Reducer = reducer.reduce;