import React from "react";
import up from "../../assets/icon-up.svg";
import down from "../../assets/icon-down.svg";

export default function MiniCard({
  img,
  alt,
  nbrFollowers,
  txtFollowers,
  dir,
  percent,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-color mb-4 d-flex justify-content-between align-items-center">
          <p>{txtFollowers}</p>
          <img className="card-image" src={img} alt={alt} />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold">{nbrFollowers}</p>
          {dir === "up" ? (
            <div className="text-secondary d-flex justify-content-center align-items-center">
              <img className="card-image " src={up} alt="up" />
              <p className="text-primary">{percent}%</p>
            </div>
          ) : (
            <div className="text-secondary d-flex justify-content-center align-items-center">
              <img className="card-image" src={down} alt="down" />
              <p className="text-secondary">{percent}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
