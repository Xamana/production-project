import { StateSchema } from 'app/provider/StoreProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;
