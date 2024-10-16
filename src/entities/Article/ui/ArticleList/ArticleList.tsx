import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../module/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

26:00

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.LIST,
    } = props;

    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.card} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
