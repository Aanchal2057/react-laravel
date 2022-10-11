import {ALL_PRODUCTS_FAIL,ALL_PRODUCTS_REQUEST,ALL_PRODUCTS_SUCCESS} from '../constants/action-types'

export const userReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case ALL_PRODUCTS_REQUEST:

			return {
				loading: true,

			};

case ALL_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};

		case ALL_PRODUCTS_FAIL:
			return {
				products: null,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};