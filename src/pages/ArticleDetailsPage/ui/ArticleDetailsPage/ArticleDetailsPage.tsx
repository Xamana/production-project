import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('ArticleDetailsPage');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div>
                {t('no id')}
            </div>
        );
    }

    return (
        <ArticleDetails id={id} />
    );
};

export default memo(ArticleDetailsPage);
