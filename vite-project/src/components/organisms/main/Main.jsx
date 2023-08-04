import Button from "../../atoms/button/Button";
import "./Main.scss";
import left from "../../../assets/left-arrow.svg";
import right from "../../../assets/right-arrow.svg";
import yay from "../../../assets/yay.svg";

const Main = () => {
  return (
    <div className="main__wrapper">
      <div className="main">
        <div className="main__text">
          <div className="main__welcome">
            <h3>WELCOME TO AGRICULTURE FARM</h3>
          </div>
          <div className="main__h">
            <h1>Agriculture & Eco Farming</h1>
          </div>
          <img src={yay} alt="" className="yay" />
          <p className="main__p">
            There are many of passages of lorem Ipsum, but the majori have
            suffered alteration in some form.
          </p>
          <Button text="Discover More" />
        </div>
      </div>
      <div className="arrows">
        <img src={left} alt="left arrow" className="arrow" />
        <img src={right} alt="right arrow" className="arrow" />
      </div>
    </div>
  );
};

export default Main;
