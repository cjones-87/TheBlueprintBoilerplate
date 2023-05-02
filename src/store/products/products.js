import axios from 'axios';

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

const fetchAllProducts = (productList) => ({
  type: GET_ALL_PRODUCTS,
  productList,
});

export const fetchAllProductsThunk = () => {
  async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products/');
      dispatch(fetchAllProducts(data));
    } catch (error) {
      console.log('There was an error retrieving all products in your thunk');
      console.error(error);
    }
  };
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.productList;
    default:
      return state;
  }
};

export default productsReducer;
