import "./Button.scss";
import phone from "../../../assets/phone.svg";

const Button = ({ text, other, icon }) => {
  return (
    <div className="btn__wrapper">
      <button className={`btn ${other && `btn--complex`}`}>
        {icon && (
          <img
            src={icon === "phone" && phone}
            alt="phone icon"
            className="btn__img"
          />
        )}
        <div className="btn__info">
          <p className="btn__other">{other}</p>
          <p className="btn__text">{text}</p>
        </div>
      </button>
    </div>
  );
};

export default Button;
