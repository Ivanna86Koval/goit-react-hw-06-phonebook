import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    account: {
        balance: 0,
    }
};

export const deposit = value => {
    return {
        type: "account/deposit",
        payload: value,
    };
}

export const withdraw = value => {
    return {
        type: "account/withdraw",
        payload: value,
    };
}

const rootReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'account/deposit':
            return {  
                account: {
                balance: state.account.balance + action.payload,
            },
        };
        case 'account/withdraw':
            return {
                account: {
                    balance: state.account.balance + action.payload,
                },
            };

            default:
        return state;
    }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);