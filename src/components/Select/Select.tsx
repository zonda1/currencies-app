import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import arrowDown from '../../images/chevron-down.svg';
import OptionComp from '../Option/Option';
import './styles.scss';
import { ICurrencies } from '../../redux/slices/currencySlice';

interface ISelect {
    selected: string;
    options: ICurrencies[];
    placeholder: string;
    onChange?: (value: ICurrencies['name']) => void;
}

const Select = ({ selected, options, placeholder, onChange }: ISelect) => {
    const [isOpen, setIsOpen] = useState(false);

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const { target } = e;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen]);

    const handleOptionClick = (value: ICurrencies['name']) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceholderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="select__wrapper" data-is-active={isOpen} ref={rootRef}>
            <div className="select__arrow">
                <img src={arrowDown} alt="" />
            </div>
            <div
                className="select__placeholder"
                // role="button"
                // tabIndex={0}
                data-selected={!!selected}
                onClick={handlePlaceholderClick}
            >
                {selected || placeholder}
            </div>
            {isOpen && (
                <ul className='select__options-list'>
                    {options.map((option: ICurrencies) => (
                        <OptionComp key={option.id} option={option} onClick={handleOptionClick} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
