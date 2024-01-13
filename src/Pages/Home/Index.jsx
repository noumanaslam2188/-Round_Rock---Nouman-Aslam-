import React from "react";
import Style from "./home.module.scss";
import Cleaning from "../../assets/images/Cleaning.png";
import Vector from "../../assets/images/vector.png";
import Drop from "../../assets/images/carbon_rain-drop.png";
import { ImageAndText } from "../../Components/Image&Text/Index";
import { Button } from "../../Components/Button/Index";
import { Card } from "../../Components/Card/Index";
import { Text } from "../../Components/Text/Index";
import { ContactButton } from "../../Components/ContactButton/Index";
import { ServiceCard } from "../../Components/ServiceCard/Index";
import { ReviewCard } from "../../Components/ReviewCard/Index";
import { Footer } from "../../Components/Footer/Index";

export const Home = () => {
  const textIrations = 6;
  const cardItrations = 3;
  const reviewIrations = 4;

  return (
    <div>
      <div className={Style.first_container}>
        <img className={Style.vector} src={Vector}></img>

        <div className={Style.leftdiv}>
          <div className={Style.content}>
            <img className={Style.myimg} src={Cleaning} alt="cleaning"></img>
            <p className={Style.heading}>Round Rock</p>
            <p className={Style.subHeading}>Cleaning Services</p>

            <div className={Style.secondtext}>
              <h6>Lorem ipsum Lorem</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <ImageAndText
                className={Style.imgtxt}
                imageUrl={Drop}
                text="Service 1"
              ></ImageAndText>
              <ImageAndText
                className={Style.imgtxt}
                imageUrl={Drop}
                text="Service 2"
              ></ImageAndText>
              <ImageAndText
                className={Style.imgtxt}
                imageUrl={Drop}
                text="Service 3"
              ></ImageAndText>

              <div className={Style.mybutton}>
                <Button></Button>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.rightdiv}>
          <div className={Style.onlycard}>
            <Card className={Style.mycard}></Card>
          </div>
        </div>
      </div>

      <div className={Style.secondContainer}>
        <p>About Us</p>
        <div className={Style.mytxt}>
          {[...Array(textIrations)].map((_, index) => (
            <Text key={index} title={index + 1}></Text>
          ))}
        </div>
        <Button></Button>
      </div>

      <div className={Style.thirdContainer}>
        <p className={Style.heading}>Services</p>

        <div className={Style.myserviceCard}>
          {[...Array(cardItrations)].map((_, index) => (
            <ServiceCard key={index}></ServiceCard>
          ))}
        </div>
        <div className={Style.serviceButton}></div>
        <Button></Button>
      </div>

      <div className={Style.fourthContainer}>
        <p>Testymonials</p>
        <div className={Style.reviewCard}>
        {[...Array(reviewIrations)].map((_, index) => (
          <ReviewCard key={index}></ReviewCard>
        ))}
        </div>
        <div className={Style.reviewButton}>
        <Button></Button>
        </div>
      </div>

      <div className={Style.fifthContainer}>
          <Footer></Footer>
      </div>
    </div>
  );
};
