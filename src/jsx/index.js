import React from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment, useState } from "react";

/// Css
import "./index.css";

/// Layout
import Nav from "./layouts/nav";

/// Pages
import Registration from "./pages/Registration";
import VehiculeSpace from "./pages/VehiculeSpace";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login.jsx";
import UpdateVehicule from "./pages/UpdateVehicule";

/// Widget

/// Deshboard
// import Home from "./components/Dashboard/Home";

const Markup = () => {
  const [log, setLog] = useState("login");

  const routes = [
    { url: "page-register", component: Registration },
    { url: "vehicule-space", component: VehiculeSpace },
    { url: "edit-vehicule", component: UpdateVehicule },



    { url: "sign-up", component: SignUp },
    { url: "login", component: Login },
  ];
  function handleChange(newValue) {
    setLog("sign-up");
  }
  function AfterRegister(newValue) {
    setLog("user");
  }
  switch (log) {
    case "login":
      return <Login value={log} onChange={handleChange} />;
      break;
    case "sign-up":
      return <SignUp value={log} onChange={AfterRegister} />;
      break;
    case "user":
      return (
        <Router basename="/react">
          <div id="main-wrapper" className="show">
            <Nav />

            <div className="content-body">
              <div className="container-fluid">
                <Switch>
                  {routes.map((data, i) => (
                    <Route
                      key={i}
                      exact
                      path={`/${data.url}`}
                      component={data.component}
                    />
                  ))}
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      );
      break;

    // default:
    //   text = "No value found";
  }

  return (
    <Switch>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>

    // <Router basename="/react">
    //   <div id="main-wrapper" className="show">
    //     <Nav />

    //     <div className="content-body">
    //       <div className="container-fluid">
    //         <Switch>
    //           {routes.map((data, i) => (
    //             <Route
    //               key={i}
    //               exact
    //               path={`/${data.url}`}
    //               component={data.component}
    //             />
    //           ))}
    //         </Switch>
    //       </div>
    //     </div>
    //   </div>
    // </Router>lnpm stqart
  );
};

export default Markup;
