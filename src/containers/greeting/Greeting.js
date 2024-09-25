import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting, contactInfo, isHireable} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  if (isHireable) {
    contactInfo.hireable = "yes";
  } else {
    contactInfo.hireable = "no";
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {t(greeting.title)}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {emoji(t(greeting.subTitle))}
              </p>
              <SocialMedia />
              
              <p>{t("phone")}: {contactInfo.number}</p>
              <div className="opp-div">
                <span className="desc-prof">
                  {t("opportunities")}: {t(contactInfo.hireable)}
                </span>
              </div>
              <div className="button-greeting-div">
                <Button text={t("contacteme")} href="#contact" />
                {greeting.resumeLink && (
                  <Button text={t("dl_resume")} className="download-link-button" href={t(greeting.resumeLink)} />
                )} 
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
