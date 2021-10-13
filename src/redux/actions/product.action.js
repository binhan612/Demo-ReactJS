import { GET_PRODUCT_REQUESTED, GET_PRODUCT_FILTER_REQUESTED } from "../constants";

export function getProduct(params) {
    return {
        type: GET_PRODUCT_REQUESTED,
        payload: params,
    };
}

export function getProductFilter(params) {
    return {
        type: GET_PRODUCT_FILTER_REQUESTED,
        payload: params,
    };
}
