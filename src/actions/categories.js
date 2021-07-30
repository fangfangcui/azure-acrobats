import CategoryService from "../services/category.service";

import {
    RETRIEVE_CATEGORIES_BEGIN, 
    RETRIEVE_CATEGORIES_SUCCESS, 
    RETRIEVE_CATEGORIES_FAIL
} from "./types";

export const fetchCategories = () => (dispatch) => {
    dispatch(retrieveCategoriesBegin());
    return CategoryService.getAllCategories().then(
        (data) => {
            dispatch(retrieveCategoriesSuccess(data));
            return Promise.resolve();
        },
        (error) => {
            dispatch(retrieveCategoriesFail(error));
            return Promise.reject();
        }
    );
};

export const retrieveCategoriesBegin = () => ({
    type: RETRIEVE_CATEGORIES_BEGIN,
});

export const retrieveCategoriesSuccess = categories => ({
    type: RETRIEVE_CATEGORIES_SUCCESS,
    payload: categories
});

export const retrieveCategoriesFail = error => ({
    type: RETRIEVE_CATEGORIES_FAIL,
    payload: error 
});