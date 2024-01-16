// userReducer.jsx
const initialState = {
    user: null,
    error: null,
   };
   
   function userReducer(state = initialState, action) {
    switch (action.type) {
       case "USER_LOGIN_SUCCESS":
         return { ...state, user: action.payload };
       case "USER_LOGIN_ERROR":
         return { ...state, error: action.payload };
       default:
         return state;
    }
   }
   
   export default userReducer;