import React from "react";
import Profile from "./components/Profile/Profile";
import App from "./App";

const Routes = {
    "/": () => App,
    "/profile": () => <Profile />
};
export default Routes