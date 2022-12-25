import React, { useState } from "react";
import { Link } from "react-router-dom";
import car from "../../images/car.jpg";
import editBtn from "../../images/NotePencil.png";
import delBtn from "../../images/del.png";
import btnpiece from "../../images/Subtract.png";
import btnpiece2 from "../../images/Subtract2.png";
import empty from "../../images/Car Card.png";
import pageLogo from "../../images/nnncar.png";

function VehiculeSpace() {
  return (
    <div>
      <div className="vehicule-title">
        <img src={pageLogo} width="48px" />
        <h1>Espace Véhicule</h1>
      </div>
      <div className="vehicule-space">
        <div className="vehicule-full-card">
          <div className="vehicule-card">
            <img src={car} height="424px" />
            <div className="vehicule-info">
              <div className="info-bar">
                <p className="prop">Nom</p>
                <p className="prop-name">lorem</p>
              </div>
              <div className="info-bar">
                <p className="prop">Immatricule</p>
                <p className="prop-name">AB-201</p>
              </div>
              <div className="info-bar">
                <p className="prop">Marque</p>
                <p className="prop-name">Camaro SL</p>
              </div>
              <div className="info-bar">
                <p className="prop">Modèl</p>
                <p className="prop-name">AG122</p>
              </div>
              <div className="info-bar">
                <p className="prop">Type Carburant</p>
                <p className="prop-name">diesel</p>
              </div>
            </div>
          </div>
          <div className="card-btns">
            <div className="editBtn">
              <img src={btnpiece} />
              <img src={editBtn} className="edit-btn" />
            </div>
            <div className="delBtn">
              <img src={btnpiece2} />
              <img src={delBtn} className="del-btn" />
            </div>
          </div>
        </div>
        <div className="vehicule-card">
          <Link to="/page-register">
            <img src={empty} />
          </Link>
        </div>
        <div className="vehicule-card">
          <Link to="/page-register">
            <img src={empty} />
          </Link>
        </div>
      </div>
      <div className="back-prpl"></div>
    </div>
  );
}

export default VehiculeSpace;
