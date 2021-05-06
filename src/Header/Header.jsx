import "./style.scss";
import React from "react";
import SearchShow from "../SearchShow/SearchShow";
const Header = (props) => {
  return (
    <header className="headerdiv">
      <h1>Bit Shows</h1>
      <SearchShow displayShow={props.displayShow} />
    </header>
  );
};

export default Header;
