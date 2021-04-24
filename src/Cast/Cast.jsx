import "./style.scss";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Cast = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/" + props.showId + "/cast")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, [props.showId]);
  return parseInt(props.castview) === 2 ? (
    <div className="actorsdiv">
      {data.map((e, i) => {
        if (i < 6) {
          return (
            <div
              key={uuid()}
              className="actordiv"
              style={{
                backgroundImage: `url(${e.person.image.medium})`,
                height: "200px",
                width: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {e.person.name}
            </div>
          );
        }
        return null;
      })}
    </div>
  ) : (
    <div className="actorsdiv1">
      {data.map((e, i) => {
        if (i < 6) {
          return (
            <div key={uuid()} className="actordiv1">
              <img src={e.person.image.medium} alt="" />
              <p>{e.person.name}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Cast;
