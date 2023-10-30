import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Icurrencies {
    id: string;
    name: string;
    min_size: string;
}

export interface CurrencyState {
    allCurrencies: Icurrencies[];
    currentCurrency: string;
}

const initialState: CurrencyState = {
    allCurrencies: [],
    currentCurrency: '',
};

const URL = 'https://api.coinbase.com/v2/currencies';

export const fetchCurrencies = createAsyncThunk('currencies', async () => {
    const response = await fetch(URL);
    const json = await response.json();
    return json.data;
});

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
            state.allCurrencies=action.payload;
        });
    },
});

export const { changeCurrency} = currencySlice.actions;
export default currencySlice.reducer;
