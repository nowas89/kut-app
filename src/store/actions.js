import * as actionTypes from "./actionTypes";

export const addNewKut = (item) => {
    return {
        type: actionTypes.ADD_KUT,
        item: item
    };
};