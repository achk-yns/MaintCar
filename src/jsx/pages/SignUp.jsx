import { Col, Row } from "react-bootstrap";
import "./SignUp.css";
import * as React from "react";

import logo from "./maintcar.png";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";


function SignUp({value, onChange}) {
  // Password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // checkbox
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div id="page">
      <form id="card" className="text-center">
        <div className=" border-bottom border-bottom pt-5 mx-5">
          <div>
            <img src={logo} alt="#" />
          </div>
          <div className="mt-2">
            <h3>Create An account </h3>
            <p>Welcome to MaintCar </p>
          </div>
        </div>
        <Row className=" p-3">
          <Col>
            <TextField
              id="standard-basic"
              label="Nom"
              variant="standard"
              size="small"
              sx={{ width: "170px" }}
            />
          </Col>
          <Col>
            <TextField
              id="standard-basic"
              label="Prenom"
              variant="standard"
              size="small"
              sx={{ width: "170px" }}
            />
          </Col>
        </Row>

        <Row className="p-3 mx-2">
          <FormControl variant="standard" sx={{ width: "356px" }}>
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

        <Row className="mx-4">
          <FormControl variant="standard" sx={{ width: "356px" }}>
            <InputLabel htmlFor="standard-adornment-password">
              Mot de pass
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ fontSize: 20 }} />
                    ) : (
                      <Visibility sx={{ fontSize: 20 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Row>

        <Row>
          <div className="d-flex align-items-stretch p-4 mx-3" >
            <input
              class="form-check-input mt-0"
              id="checkbox_terms"
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <label htmlFor="checkbox_terms" id="label_terms" className="mx-2"> I have read an agree to the <span>terms of services</span> </label>
          </div>
        </Row>
          <Row className="d-flex justify-content-center  mt-3">
            <button onClick={onChange} type={"submit"} id="signup_btn">
            Create Account
            </button>
          </Row>
      </form>
    </div>
  );
}

export default SignUp;
