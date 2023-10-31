import { useEffect, useState } from 'react';
import './styles.scss';

import { changeCurrency, fetchCurrencies } from '../../redux/slices/currencySlice';
import { useAppSelector, useAppDispatch } from '../../redux/store/store';
import { selectAllCurrencies, selectCurrentCurrency } from '../../redux/selectors/selectors';
import Select from '../Select/Select';

const Header = () => {
    const dispatch = useAppDispatch();
    const currencies = useAppSelector(selectAllCurrencies);
    const currentCurrency = useAppSelector(selectCurrentCurrency);

    useEffect(() => {
        dispatch(fetchCurrencies());
    }, []);

    useEffect(() => {
        dispatch(changeCurrency(currencies[0]?.name));
    }, [currencies]);

    const handleCurrencySelect = (value: string) => {
        dispatch(changeCurrency(value));
    };

    return (
        <div className="header">
            <div className="header__title">
                <h2>Cat</h2>
                <h3>currencies academic terms</h3>
            </div>
            <div className="header__select">
                {/* <select
                    name="currencies"
                    id={currencies[0]?.id}
                    defaultValue={currencies[0]?.name}
                    value={currentCurrency ?? ''}
                    onChange={(e) => dispatch(changeCurrency(e.target.value))}
                >
                    {currencies?.map((el) => (
                        <option key={el.id} value={el.name}>
                            {el.name}
                        </option>
                    ))}
                </select> */}

                <Select
                    options={currencies}
                    selected={currentCurrency || null}
                    placeholder="Выберите месяц"
                    onChange={handleCurrencySelect}
                />
            </div>
        </div>
    );
};

export { Header };
