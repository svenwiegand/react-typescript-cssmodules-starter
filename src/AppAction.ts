import { actionFilter, declareAction } from 'typed-redux-actions';

export enum ActionType {
    enthusiasmIncrease = 'enthusiasmIncrease',
    enthusiasmDecrease = 'enthusiasmDecrease',
}

export function increaseEnthusiasm(increaseBy: number = 1) {
    return {
        type: ActionType.enthusiasmIncrease as ActionType.enthusiasmIncrease,
        increase: increaseBy
    };
}

export function decreaseEnthusiasm(decreaseBy: number = 1) {
    return {
        type: ActionType.enthusiasmDecrease as ActionType.enthusiasmDecrease,
        decrease: decreaseBy
    }
}

export const filter = actionFilter(ActionType, [
    declareAction(increaseEnthusiasm),
    declareAction(decreaseEnthusiasm)
]);
