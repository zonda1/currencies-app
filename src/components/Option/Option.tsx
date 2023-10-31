import React, { MouseEventHandler } from 'react';
import { ICurrencies } from '../../redux/slices/currencySlice';

type OptionProps = {
    option: ICurrencies;
    onClick: (value: ICurrencies['name']) => void;
};

const OptionComp = (props: OptionProps) => {
    const {
        option: { name },
        onClick,
    } = props;

    const handleClick =
        (clickedValue: ICurrencies['name']): MouseEventHandler<HTMLLIElement> =>
        () => {
            onClick(clickedValue);
        };

    return (
        <li className="select__option" value={name} onClick={handleClick(name)}>
            {name}
        </li>
    );
};

export default OptionComp;
