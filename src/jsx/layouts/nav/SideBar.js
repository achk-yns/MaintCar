import React, { Component } from "react";
import "../../../icons/uicons-regular-straight/css/uicons-regular-straight.css";
import "../../../icons/uicons-regular-rounded/css/uicons-regular-rounded.css";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

///
import DashboardIcon from "../../../icons/dashboard.png";
// import DashboardIcon from "../../../icons/Dashboard Icon.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    this.mm("dispose");
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }

    btn.addEventListener("click", toggleFunc);
  }
  render() {
    /// Path
    const path = window.location.pathname;

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            {/* <div id="Side-Nav-Bar"> */}
            <li>
              <Link className="ai-icon" to="/" aria-expanded="false">
                {/* <i className="flaticon-381-networking"></i> */}
                {/* <img src={DashboardIcon} /> */}
                <i class="fi fi-rs-apps"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                className="ai-icon"
                to="vehicule-space"
                aria-expanded="false"
              >
                <i class="fi fi-rs-car-garage"></i>
                <span className="nav-text">Vehicule</span>
              </Link>
            </li>
            <li>
              <Link className="ai-icon" to="#" aria-expanded="false">
                <i class="fi fi-rr-business-time"></i>
                <span className="nav-text">Maintenance</span>
              </Link>
            </li>
            <li>
              <Link className="ai-icon" to="#" aria-expanded="false">
                <i class="fi fi-rr-oil-can"></i>
                <span className="nav-text">Consomation</span>
              </Link>
            </li>
            <li>
              <Link className="ai-icon" to="#" aria-expanded="false">
                <i className="flaticon-381-newspaper"></i>
                <span className="nav-text">Blogues</span>
              </Link>
            </li>
            <li>
              <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                <i className="flaticon-381-layer-1"></i>
                <span className="nav-text">Pages</span>
              </Link>
              <ul aria-expanded="false">
                <li>
                  <Link to="/page-register">Register</Link>
                </li>
                <li>
                  <Link to="/sign-up">Login</Link>
                </li>
              </ul>
            </li>
          </MM>
          <MM className="metismenu" id="menu">
            <li>
              <Link className="ai-icon" to="/" aria-expanded="false">
                <i class="fi fi-rr-settings-sliders"></i>
                <span className="nav-text">Paramétre</span>
              </Link>
            </li>
            <li>
              <Link className="ai-icon" to="/" aria-expanded="false">
                <i class="fi fi-rr-exit"></i>
                <span className="nav-text">Exit</span>
              </Link>
            </li>
          </MM>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
