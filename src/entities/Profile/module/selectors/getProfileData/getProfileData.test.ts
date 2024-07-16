import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileData } from './getProfileData';

const data = {
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'admin',
            city: 'asd',
            currency: Currency.EUR,
            first: 'asd',
        },
    },
};
describe('getProfileData.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileData(state as StateSchema)).toBe('error');
    });
    test('should withuot error in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
