import { counterReducer, coutnerActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, coutnerActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, coutnerActions.decrement())).toEqual({ value: 9 });
    });
    test('empty value', () => {
        expect(counterReducer(undefined, coutnerActions.increment())).toEqual({ value: 1 });
    });
});
