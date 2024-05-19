import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemProvider';
import { Suspense, useState } from 'react';
import { AppRouter } from 'app/provider/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
