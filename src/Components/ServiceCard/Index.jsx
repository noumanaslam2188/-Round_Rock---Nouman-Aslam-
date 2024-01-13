import React from "react";
import Style from "./servicecard.module.scss";
import Background from "../../assets/images/background.png";

export const ServiceCard = () => {
  return (
    <div>
      <div className={Style.serviceCard}>
        <img className={Style.background} src={Background}></img>
        <div className={Style.textContent}>
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste atque
          ex dignissimos doloremque, voluptatum iusto quia eius ipsa 
        </p>
        </div>
      </div>
    </div>
  );
};
