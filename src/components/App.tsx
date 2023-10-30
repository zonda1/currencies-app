import {Header} from './Header';
import {Main} from './Main';
import './styles.scss';

const App = () => {
    
    return (
        <div className="flex">
            <h1>Currencies</h1>
            <Header />
            <Main/>
        </div>
    );
};

export default App;
