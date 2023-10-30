import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const selectSelf = (state: RootState) => state;
export const selectAllCurrencies = createSelector(selectSelf, (state) => state.currency.allCurrencies);
export const selectCurrentCurrency = createSelector(selectSelf, (state) => state.currency.currentCurrency);
