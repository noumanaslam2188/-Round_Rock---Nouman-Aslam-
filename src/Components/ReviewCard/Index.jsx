import React from "react";
import Style from "./reviewcard.module.scss";
import UserImage from "../../assets/images/eclipse1.png";
import { CiStar } from "react-icons/ci";

export const ReviewCard = () => {
  return (
    <div>
      <div className={Style.reviewCard}>
        <img className={Style.userImage} src={UserImage}></img>
        <div className={Style.content}>
          <h4>Courtney Henry</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div className={Style.divicon}>
            <div className={Style.icon}></div>
            <div className={Style.icon}></div>
            <div className={Style.icon}></div>
            <div className={Style.icon}></div>
            <div className={Style.icon}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
