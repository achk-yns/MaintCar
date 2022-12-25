import { Col, Row } from "react-bootstrap";
import * as React from "react";
import "./AdminForm.css";

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

function AdminForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div id={"container"} className="d-flex justify-content-center flex-column">
      <form className="login text-center">
        <Col>
          <Row className="border-bottom pt-4 mx-5">
            <h2>Se connecter</h2>
            <p>Maintcar</p>
          </Row>

          <Row className="d-flex justify-content-center  mt-4 pt-2">
            <FormControl variant="standard" sx={{ width: "261px" }}>
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
            <FormControl sx={{ width: "261px" }} variant="standard">
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
          <Row className="d-flex justify-content-center  mt-5">
            <button type={"submit"} id="login_btn">
              Se connecter
            </button>
          </Row>
        </Col>
      </form>
    </div>
  );
}

export default AdminForm;
