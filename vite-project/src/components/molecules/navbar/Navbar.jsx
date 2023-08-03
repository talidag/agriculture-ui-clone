import NavEl from "../../atoms/nav-el/NavEl";
import "./Navbar.scss";
import logo from "../../../assets/logo.svg";
import cart from "../../../assets/cart.svg";
import search from "../../../assets/search.svg";
import Button from "../../atoms/button/Button";

const Navbar = () => {
  const menuElements = ["Home", "About", "Pages", "Projects", "News"];

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="agrikon logo" className="nav__image" />
      </div>
      <div className="nav__elements">
        {menuElements.map((element, index) => (
          <NavEl element={element} key={index} />
        ))}
      </div>
      <div className="icons">
        <div className="icon">
          <img className="icon__image" src={cart} alt="shopping cart icon" />
        </div>
        <div className="icons">
          <img className="icon__image" src={search} alt="search icon" />
        </div>
        <Button text={"Call Anytime"} number={"012345678910"} icon={"phone"} />
      </div>
    </nav>
  );
};

export default Navbar;
