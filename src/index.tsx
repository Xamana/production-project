import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemProvider';
import { StoreProvider } from 'app/provider/StoreProvider';
import { ErrorBoundary } from './app/provider/ErrorBoundary';
import App from './app/App';

import 'app/styles/index.scss';
import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
