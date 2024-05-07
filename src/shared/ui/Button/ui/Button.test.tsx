import { Button, ButtonTheme } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('have text', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('have correct className', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
