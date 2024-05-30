/** @format */
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { getCounterValue } from '../module/selectors/getCounterValue/getCounterValue';
import { coutnerActions } from '../module/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const { t } = useTranslation();

    const increment = () => {
        dispatch(coutnerActions.increment());
    };

    const decrement = () => {
        dispatch(coutnerActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>

            <button data-testid="increment-btn" type="button" onClick={increment}>
                {t('increment')}
            </button>
            <button data-testid="decrement-btn" type="button" onClick={decrement}>
                {t('decrement')}
            </button>
        </div>
    );
};
