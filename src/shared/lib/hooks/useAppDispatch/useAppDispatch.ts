import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/provider/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
