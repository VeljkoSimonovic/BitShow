import "./style.scss";
import React from "react";

const Footer = (props) => {
  let date = new Date();
  date =
    date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
  return (
    <header className="footerdiv">
      <h1>C Bit Institute {`${date}`}</h1>
    </header>
  );
};

export default Footer;
