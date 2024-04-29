import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const errorHandler = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={errorHandler}
        >
            {t('Throw Error')}
        </Button>
    );
};
