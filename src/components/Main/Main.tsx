import { useAppSelector } from '../../redux/store/store';
import { selectCurrentCurrency } from '../../redux/selectors/selectors';
import './styles.scss';

const Main = () => {
    const currentCurrency = useAppSelector(selectCurrentCurrency);
    return (
        <div className="main">
            <div className="main__wrapper">
                <p className="main__content">{currentCurrency}</p>
            </div>
        </div>
    );
};

export { Main };
