import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string; 
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const { 
        className,
        theme,
        ...otherProps} = props;
    return (
        <button 
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
             
        </button>
    );
}