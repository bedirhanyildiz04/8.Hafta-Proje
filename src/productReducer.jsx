// productReducer.jsx
const productReducer = (state = [], action) => {
  switch (action.type) {
     case "ADD_PRODUCT":
       return [...state, action.payload];
     case "REMOVE_PRODUCT":
       return state.filter((product) => product.id !== action.payload.id);
     default:
       return state;
  }
 };
 
 export default productReducer;
