import * as Redux from 'redux';

export interface State {
    readonly enthusiasm: number;
}

export const initialState: State = {
    enthusiasm: 1
};

export const ActionType = {
    increase: 'enthusiasmIncrease',
    decrease: 'enthusiasmDecrease'
};

export function createIncreaseEnthusiasm(): Redux.Action {
    return { type: ActionType.increase };
}

export function createDecreaseEnthusiasm(): Redux.Action {
    return { type: ActionType.decrease }
}

export const Reducer: Redux.Reducer<State> = (state: State, action: Redux.AnyAction) => {
    switch (action.type) {
        case ActionType.increase: return { enthusiasm: state.enthusiasm + 1 };
        case ActionType.decrease: return { enthusiasm: state.enthusiasm - 1 };
        default: return state;
    }
};