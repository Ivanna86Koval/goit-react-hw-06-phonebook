import { configureStore } from "@reduxjs/toolkit";
import {localeReducer} from './localeSlice'
import { accountReducer } from "./accountSlice";

export const store = configureStore({
    reducer:  {
    account: accountReducer,
    locale: localeReducer,
    },
});

