import TransactionService from "../services/transaction.service";

import {
    RETRIEVE_TRANSACTIONS_BEGIN, 
    RETRIEVE_TRANSACTIONS_SUCCESS, 
    RETRIEVE_TRANSACTIONS_FAIL
} from "./types";

export const fetchTransactions = () => (dispatch) => {
    dispatch(retrieveTransactionsBegin());
    return TransactionService.getAllTransactions().then(
        (data) => {
            dispatch(retrieveTransactionsSuccess(data));
            return Promise.resolve();
        },
        (error) => {
            dispatch(retrieveTransactionsFail(error));
            return Promise.reject();
        }
    );
};

export const retrieveTransactionsBegin = () => ({
    type: RETRIEVE_TRANSACTIONS_BEGIN,
});

export const retrieveTransactionsSuccess = transactions => ({
    type: RETRIEVE_TRANSACTIONS_SUCCESS,
    payload: transactions
});

export const retrieveTransactionsFail = error => ({
    type: RETRIEVE_TRANSACTIONS_FAIL,
    payload: error 
});