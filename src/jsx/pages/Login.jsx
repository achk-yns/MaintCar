import { Col, Row } from "react-bootstrap";
import * as React from "react";
import "./Login.css";

import maintcar from "./maintcar.png";

import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle } from "@mui/icons-material";

function Login({value, onChange}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div id={"container"} className="d-flex justify-content-center flex-column">
      <form className="login text-center">
        <Col>
          <div className="border-bottom pt-4 mx-5">
            <div>
              <img src={maintcar} alt={"logo"} />
            </div>
            <h3>Se connecter</h3>
            <p>Maintcar</p>
          </div>

          <Row className="d-flex justify-content-center  mt-3">
            <FormControl variant="standard" sx={{ width: "300px" }}>
              
              <Input
                id="input-with-icon-adornment"
                placeholder="Email@example.com"
                type="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Row>

          <Row className="d-flex justify-content-center  mt-3">
            <FormControl sx={{ width: "300px" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Mot de pass 
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                sx={{ opacity: "40%" }}

                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff  sx={{ fontSize: 20 }} /> : <Visibility  sx={{ fontSize: 20 }} />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Row>
          <Row className="d-flex justify-content-center  mt-5">
            <button onClick={(e) => {window.location.replace('http://localhost:3000/sign-up')}} type={"submit"} id="login_btn">
              Se connecter
            </button>
          </Row>
        </Col>
      </form>
      <div className="mt-4" id="under_msg">
        <p className="text-dark">
          {" "}
          Don't have an aaccount ? <a onClick={onChange}>Sign Up </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
