import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      //const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.

          console.log(auth, "Signed out successfully");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  // state = {basket, user}
  //instead of state use {basket}

  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

/**
 * [{ basket }, dispatch] is a destructuring assignment that extracts the basket property from the state and the dispatch function from the result of useStateValue().
 If you want to modify the basket state (e.g., add or remove items), you can use the dispatch function. For example, to add an item to the basket:
*/
