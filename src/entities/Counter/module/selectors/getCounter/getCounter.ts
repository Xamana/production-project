import { StateSchema } from 'app/provider/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
