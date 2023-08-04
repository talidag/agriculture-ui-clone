import Button from "../../atoms/button/Button";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__text">
        <div className="main__welcome">
          <h3>WELCOME TO AGRICULTURE FARM</h3>
        </div>
        <div className="main__h">
          <h1>Agriculture & Eco Farming</h1>
        </div>
        <p className="main__p">
          There are many of passages of lorem Ipsum, but the majori have
          suffered alteration in some form.
        </p>
        <Button text="Discover More" />
      </div>
    </div>
  );
};

export default Main;
