import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemProvider';
import App from './app/App';
import { ErrorBoundary } from './app/provider/ErrorBoundary';

import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
