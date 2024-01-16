// UserComponent.js
import React, { useSelector, useDispatch } from "react";
import { userActions } from "./userActions";

function UserComponent() {
 const user = useSelector((state) => state.user);
 const dispatch = useDispatch();

 const login = () => {
    dispatch(userActions.login("John Doe"));
 };

 // user ve login fonksiyonunu kullanan diğer kodlar
}

export default UserComponent;