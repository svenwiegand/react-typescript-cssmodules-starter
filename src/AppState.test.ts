import { createDecreaseEnthusiasm, createIncreaseEnthusiasm, initialState, Reducer } from './AppState';

describe('AppState', () => {
    it('provides an initial state', () => {
        expect(initialState.enthusiasm).toBe(1);
    });

    it('increases enthusiasm', () => {
        const state = Reducer(initialState, createIncreaseEnthusiasm());
        expect(state.enthusiasm).toBe(2);
    });

    it('decreases enthusiasm', () => {
        const state = Reducer(initialState, createDecreaseEnthusiasm());
        expect(state.enthusiasm).toBe(0);
    });

    it('ignores unknown actions', () => {
        const state = Reducer(initialState, { type: 'unkown' });
        expect(state).toBe(initialState);
    })
});