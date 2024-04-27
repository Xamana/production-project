import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemProvider';
import { Suspense } from 'react';
import App from './app/App';

import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback={<span>...</span>}>
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
