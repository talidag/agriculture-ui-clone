import "./Header.scss";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import pinterest from "../../../assets/pinterest.svg";
import linkedin from "../../../assets/linkedin.svg";
import clock from "../../../assets/clock.svg";
import email from "../../../assets/email.svg";

const Footer = () => {
  return (
    <header className="header">
      <div className="left__content">
        <div className="brands">
          <img src={facebook} alt="facebook logo" className="brand" />
          <img src={twitter} alt="twitter logo" className="brand" />
          <img src={pinterest} alt="pinterest logo" className="brand" />
          <img src={linkedin} alt="linkedin logo" className="brand" />
        </div>
        <div className="welcome">
          <p className="welcome__text">Welcome to Agriculture Farm</p>
        </div>
      </div>
      <div className="right__content">
        <div className="item">
          <img src={email} alt="email icon" className="icon" />
          <p className="text">agriculture.999@gmail.com</p>
        </div>
        <div className="item">
          <img src={clock} alt="clock" className="icon" />
          <p className="text">Mon - Sat 8:00 - 6:30, Sunday - CLOSED</p>
        </div>
      </div>
    </header>
  );
};

export default Footer;
