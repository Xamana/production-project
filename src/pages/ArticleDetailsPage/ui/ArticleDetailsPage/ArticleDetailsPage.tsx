import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('ArticleDetailsPage');
    const { id = '1' } = useParams<{id: string}>();

    if (!id) {
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div>
                {t('no id')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text text={t('Коментарии')} />
            <CommentList />
        </div>
    );
};

export default memo(ArticleDetailsPage);
