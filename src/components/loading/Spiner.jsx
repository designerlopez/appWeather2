import React from "react";
import "./style/styleLoading.css";

const Spiner = () => {
  return (
    <div className="container-spiner">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
