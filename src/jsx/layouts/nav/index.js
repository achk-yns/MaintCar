import React, { Fragment, useState } from "react";
import SideBar from "./SideBar";
import NavHader from "./NavHader";
import Header from "./Header";
import SignUp from "../../pages/SignUp";
import { Route } from "react-router";
import { Switch } from "react-router";
import Login from "../../pages/Login.jsx";

const JobieNav = ({ title }) => {
  const [toggle, setToggle] = useState("");
  const [log, setLog] = useState("user");
  const [auth, setAuth] = useState(<SignUp />);
  const onClick = (name) => setToggle(toggle === name ? "" : name);
  switch (log) {
    case "login":
      return <Login />;
      break;
    case "sign-up":
      return <SignUp />;
      break;
    case "user":
      return (
        <Fragment>
          <NavHader />
          <SideBar />
          <Header
            onNotification={() => onClick("notification")}
            onProfile={() => onClick("profile")}
            toggle={toggle}
            title={title}
            onBox={() => onClick("box")}
          />
        </Fragment>
      );
      break;

    // default:
    //   text = "No value found";
  }

  return (
    <Fragment>
      {/* <Switch>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch> */}
      {/* <SignUp /> */}
      {/* {auth} */}
      <NavHader />
      <SideBar />
      <Header
        onNotification={() => onClick("notification")}
        onProfile={() => onClick("profile")}
        toggle={toggle}
        title={title}
        onBox={() => onClick("box")}
      />
    </Fragment>
  );
};

export default JobieNav;
