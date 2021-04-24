import "./style.scss";
import React from "react";
import { v4 as uuid } from "uuid";

const Genre = (props) => {
  return (
    <div className="genresdiv">
      {props.genredata.map((e) => (
        <div className="genrediv" key={uuid()}>
          {e}
        </div>
      ))}
    </div>
  );
};

export default Genre;
