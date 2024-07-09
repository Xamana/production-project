import { StateSchema } from 'app/provider/StoreProvider';
import { getCounter } from './getCounter';

describe('gerCounter', () => {
    test('shousl return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
