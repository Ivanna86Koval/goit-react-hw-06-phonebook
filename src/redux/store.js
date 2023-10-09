import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { type } from "@testing-library/user-event/dist/type";
import { accountReducer } from "./accountSlice";
import {localeReducer} from './localeSlice'

const rootReducer = combineReducers ({
    account: accountReducer,
    locale: localeReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
