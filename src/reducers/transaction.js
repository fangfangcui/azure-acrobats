import {
    RETRIEVE_TRANSACTIONS_SUCCESS, RETRIEVE_TRANSACTIONS_FAIL, RETRIEVE_TRANSACTIONS_BEGIN
} from "../actions/types";

const initialState = {
    items: [],
    loading: true,
    error: null
  };

function transactionReducer(state = initialState, action) {

switch (action.type) {
    case RETRIEVE_TRANSACTIONS_BEGIN:
        return {
            ...state,
            items: [],
            loading: true,
            error: null,
        };

    case RETRIEVE_TRANSACTIONS_SUCCESS:
        console.log(action.payload);
        return {
            ...state,
            items: action.payload,
            loading: false,
            error: null,
        };
    case RETRIEVE_TRANSACTIONS_FAIL:
        return {
            ...state,
            items: [],
            loading: false,
            error: action.payload,
        }

    default:
        return state;
  };
}
export default transactionReducer;