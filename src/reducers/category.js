import {
    RETRIEVE_CATEGORIES_SUCCESS, RETRIEVE_CATEGORIES_FAIL, RETRIEVE_CATEGORIES_BEGIN
} from "../actions/types";

const initialState = {
    items: [],
    loading: true,
    error: null
  };

function categoryReducer(state = initialState, action) {

switch (action.type) {
    case RETRIEVE_CATEGORIES_BEGIN:
        return {
            ...state,
            items: [],
            loading: true,
            error: null,
        };

    case RETRIEVE_CATEGORIES_SUCCESS:
        console.log(action.payload);
        return {
            ...state,
            items: action.payload,
            loading: false,
            error: null,
        };
    case RETRIEVE_CATEGORIES_FAIL:
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
export default categoryReducer;