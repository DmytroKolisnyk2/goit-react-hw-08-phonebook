import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../redux/auth/auth-operations";
import { getAuthName, getToken } from "../../../redux/auth/auth-selectors";

export default function UserMenu() {
  const dispatch = useDispatch();

  const token = useSelector(getToken);
  const name = useSelector(getAuthName);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(logOutUser(token));
  };
  return (
    <div className="UserMenu">
      <span className="UserMenu__text">Hi, {name}</span>
      <button onClick={(e) => onClickHandler(e)} type="button" className="UseMenu__btn">
        Logout
      </button>
    </div>
  );
}
