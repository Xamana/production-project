import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemProvider';

import { AppRouter } from 'app/provider/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className={'content-page'}>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
