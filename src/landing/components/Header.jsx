import logo from "./assets/logo-removebg-preview.png";
import "../Landing.css";

function Header() {
  return (
    <div className="headerContainer">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

export default Header;
