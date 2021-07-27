import HouseholdService from "../services/household.service";
import http from '../http-common';
import axios from "axios";


import {
    RETRIEVE_HOUSEHOLDS_BEGIN, RETRIEVE_HOUSEHOLDS_SUCCESS, RETRIEVE_HOUSEHOLDS_FAIL
} from "./types";

const API_URL = 'http://localhost:8080/api/households/';

export const retrieveHouseholdsBegin = () => ({
    type: RETRIEVE_HOUSEHOLDS_BEGIN,
});

export const retrieveHouseholdsSuccess = households => ({
    type: RETRIEVE_HOUSEHOLDS_SUCCESS,
    payload: households
});

export const retrieveHouseholdsFail = error => ({
    type: RETRIEVE_HOUSEHOLDS_FAIL,
    payload: error 
});



// export function fetchHouseholds(){
//     return function(dispatch) {
//         dispatch(retrieveHouseholdsBegin());
//         return axios.get(API_URL).then(({ data }) => {
//             console.log(data);
//             dispatch(retrieveHouseholdsSuccess(data));
//         }).error((error) => {
//             dispatch(retrieveHouseholdsFail(error));
//         })
//     };
// }


export const fetchHouseholds = () => (dispatch) => {
    dispatch(retrieveHouseholdsBegin());
    return HouseholdService.getAllHouseholds().then(
        (data) => {
            dispatch(retrieveHouseholdsSuccess(data));

            return Promise.resolve();
        },
        (error) => {
            dispatch(retrieveHouseholdsFail(error));

            return Promise.reject();
        }
    );
};