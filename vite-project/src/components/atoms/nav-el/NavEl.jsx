import "./NavEl.scss";

const NavEl = ({ element }) => {
  return (
    <div className="nav__element">
      <p className="nav__element__text">{element}</p>
    </div>
  );
};

export default NavEl;
