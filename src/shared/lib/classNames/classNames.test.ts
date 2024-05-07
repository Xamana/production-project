import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with first class name', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with aditional params', () => {
        const expected = 'class1 class2 class3';
        expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected);
    });
    test('with mods params', () => {
        const expected = 'class1 class2 class3 hoverd scrolabble';
        expect(classNames('class1', { hoverd: true, scrolabble: true }, ['class2', 'class3'])).toBe(expected);
    });
    test('with mods params and falsy classes', () => {
        const expected = 'class1 class2 class3 hoverd';
        expect(classNames('class1', { hoverd: true, scrolabble: false }, ['class2', 'class3'])).toBe(expected);
    });
});
