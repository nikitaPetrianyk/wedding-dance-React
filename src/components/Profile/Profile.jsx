import React, { useContext } from "react";
import AuthContext from "../../AuthContext";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

const Profile = () => {
  const value = useContext(AuthContext);
  const logOut = () => {
    localStorage.removeItem("auth_token");
    value.changeAuthStatus();
  };
  return (
    <BrowserRouter>
      <div className='profile'>
        <p className='profile__title'>
          This page can see only authorized users!
        </p>
        <button className='profile__btn btn' onClick={logOut}>
          <NavLink to='/'>Logout</NavLink>
        </button>
      </div>
    </BrowserRouter>
  );
};

export default Profile;
