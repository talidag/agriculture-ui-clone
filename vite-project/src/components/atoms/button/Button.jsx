import "./Button.scss";
import phone from "../../../assets/phone.svg";

const Button = ({ text, number, icon }) => {
  return (
    <div className="btn__wrapper">
      <button className="btn">
        {icon && (
          <img
            src={icon === "phone" && phone}
            alt="phone icon"
            className="btn__img"
          />
        )}
        {text}
        {number}
      </button>
    </div>
  );
};

export default Button;
