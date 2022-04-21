import React from "react";
import airbnblogo from "../images/airbnb.png";

export default function NavBar() {
  return (
    <nav>
      <img className="nav--logo" src={airbnblogo} alt="airbnblogo"></img>
    </nav>
  );
}
