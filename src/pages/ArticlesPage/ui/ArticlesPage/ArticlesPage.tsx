import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('ArticlesPage');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleDetailsPage />
        </div>
    );
};

export default memo(ArticlesPage);
