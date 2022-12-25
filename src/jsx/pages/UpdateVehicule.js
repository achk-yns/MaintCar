import { DatePicker } from "@y0c/react-datepicker";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import car from "../../images/Vector.png";
import lightning from "../../images/Lightning.png";

import "../../../src/icons/uicons-regular-rounded/css/uicons-regular-rounded.css";
function UpdateVehicule() {

    const [value, setValue] = React.useState(30);
  const [registrationData, setRegistrationData] = useState({});
  const [fileName, setFileName] = useState();

  const actualBtn = document.getElementById("upload");

  const fileChosen = document.getElementById("file-chosen");

  const file = (e) => {
    console.log(e.target.value.split("\\").pop());
    setFileName(e.target.value.split("\\").pop());
    fileChosen.textContent = e.target.value.split("\\").pop();
  };
  const RemoveFile = (e) => {
    setFileName();
    fileChosen.textContent = "No file chosen";
  };

  //   actualBtn.addEventListener("change", function (e) {
  //     console.log(e.target.value);
  //   });
  const handleBlur = (e) => {
    const newRegistrationData = { ...registrationData };
    newRegistrationData[e.target.name] = e.target.value;
    setRegistrationData(newRegistrationData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const submitRegister = { ...registrationData };
  };
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur2 = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className="authincation">
      <div className="container p-0">
        <div className="row justify-content-center align-items-center authincation-page-area">
          <div className="col-lg-6 col-md-9">
            <div className="authincation-content">
              <div className="row no-gutters">
                <Link to={"/vehicule-space"} className="BackBtn">
                  <i class="fi fi-rr-cross"></i>
                </Link>
                <div className="card">
                  <div className="card-header">
                    <img src={car} width="50px" />
                    <h1>Update Véhicule</h1>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Immatricule"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="kilométrage"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <select id="inputState" className="form-control">
                              <option selected>Marque</option>
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <select id="inputState" className="form-control">
                              <option selected>Modél</option>
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <input type="date" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <select id="inputState" className="form-control">
                              <option selected>Type Carburant</option>
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <div className="form-row d-flex justify-content-between">
                            <label>Consomation Moyenne</label>
                            <label>
                              <span className="ajoutKmValue">{value} </span>
                              L/ 100km
                            </label>
                          </div>
                          <Slider
                            defaultValue={50}
                            aria-label="Default"
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            sx={{
                              color: "#9747FF",
                              height: 8,
                              "& .MuiSlider-track": {
                                border: "none",
                              },
                              "& .MuiSlider-thumb": {
                                height: 24,
                                width: 24,
                                backgroundColor: "#fff",
                                border: "2px solid currentColor",
                                "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":
                                  {
                                    boxShadow: "inherit",
                                  },
                                "&:before": {
                                  display: "none",
                                },
                              },
                              "& .MuiSlider-valueLabel": {
                                lineHeight: 1.2,
                                fontSize: 12,
                                background: "unset",
                                padding: 0,
                                width: 32,
                                height: 32,
                                borderRadius: "50% 50% 50% 0",
                                backgroundColor: "#9747FF",
                                transformOrigin: "bottom left",
                                transform:
                                  "translate(50%, -100%) rotate(-45deg) scale(0)",
                                "&:before": { display: "none" },
                                "&.MuiSlider-valueLabelOpen": {
                                  transform:
                                    "translate(50%, -100%) rotate(-45deg) scale(1)",
                                },
                                "& > *": {
                                  transform: "rotate(45deg)",
                                },
                              },
                            }}
                          />
                        </div>
                        <div className="uploadImage">
                          <input
                            type="file"
                            id="upload"
                            onChange={file}
                            hidden
                          />
                          <label for="upload">
                            Importer Image<i class="fi fi-rr-link"></i>
                          </label>
                          <div>
                            <span id="file-chosen">No file chosen</span>
                            {fileName ? (
                              <i
                                onClick={RemoveFile}
                                class="fi fi-rr-cross-circle"
                              ></i>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary AddVBtn"
                        >
                          Enregister <img src={lightning} />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateVehicule ;