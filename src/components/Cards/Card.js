import React from "react";
import up from "../../assets/icon-up.svg";
import down from "../../assets/icon-down.svg";

export default function Card({
  img,
  alt,
  nameUser,
  nbrFollowers,
  txtFollowers,
  dir = "up",
  borderColor,
}) {
  let className = "card-border-size m-4  card-border-color-" + borderColor;
  return (
    <div className={className}>
      <div className="card card-border-color-margin text-center">
        <div className="card-body">
          <div className="card-color d-flex justify-content-center ">
            <img className="card-image" src={img} alt={alt} />
            <p className="ms-1">{nameUser}</p>
          </div>
          <div>
            <h1 className="fw-bold">{nbrFollowers}</h1>
            <p className="card-color text-uppercase letter-spacing">
              {txtFollowers}
            </p>
          </div>
          {dir === "up" ? (
            <div className="text-secondary d-flex justify-content-center align-items-center">
              <img className="card-image " src={up} alt="up" />
              <h4 className="ms-1 text-primary">Today</h4>
            </div>
          ) : (
            <div className="text-secondary d-flex justify-content-center align-items-center">
              <img className="card-image" src={down} alt="down" />
              <h4 className="ms-1 text-secondary">Today</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
