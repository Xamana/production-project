import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import { Card } from 'shared/ui/Card';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';

import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../module/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation();
    const [isHover, bindHover] = useHover();

    console.log(isHover);

    if (view === ArticleView.PLATE) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {article.title}
            </div>
        );
    }

    return (
        <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.cardImage} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
