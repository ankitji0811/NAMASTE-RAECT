import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [userDetail, setUserDetail] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="user-btn"
            onClick={() => {
              userDetail === "Login"
                ? setUserDetail("Logout")
                : setUserDetail("Login");
            }}
          >
            {userDetail}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
