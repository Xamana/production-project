import { StateSchema } from 'app/provider/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
