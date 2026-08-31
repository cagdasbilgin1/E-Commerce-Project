export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });

import { axiosInstance } from '../../api/axiosInstance';

export const fetchCategories = () => async (dispatch, getState) => {
  const { categories } = getState().product;
  if (categories && categories.length > 0) return; // Already fetched

  dispatch(setFetchState('FETCHING'));
  try {
    const response = await axiosInstance.get('/categories');
    dispatch(setCategories(response.data));
    dispatch(setFetchState('FETCHED'));
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    dispatch(setFetchState('FAILED'));
  }
};

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(setFetchState('FETCHING'));
  
  try {
    // You can pass limit/offset/filter from state to params here if needed
    const response = await axiosInstance.get('/products');
    
    // As per requirement: "set total to Product Reducer" and "set products to Product Reducer"
    dispatch(setTotal(response.data.total));
    dispatch(setProductList(response.data.products));
    
    dispatch(setFetchState('FETCHED'));
  } catch (error) {
    console.error('Failed to fetch products:', error);
    dispatch(setFetchState('FAILED'));
  }
};
