import image from '../images/image.png';
import logo from '../images/logo.svg';

const App = () => {
    return (
        <div>
            <h1 className="h1">Приложение на React</h1>
            <div>
                <img className="logo1" src={image} alt="" />
            </div>

            <div>
                <img className="logo2" src={logo} alt="" />
            </div>
        </div>
    );
};

export default App;
