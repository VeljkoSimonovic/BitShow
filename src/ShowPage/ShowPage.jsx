import "./style.scss";
import React, { useEffect, useState } from "react";
import Genre from "../Genre/Genre";
import Cast from "../Cast/Cast";

const ShowPage = (props) => {
  const [data, setData] = useState({ image: {}, genres: [] });
  const [castview, setCastView] = useState(localStorage.getItem("view"));
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/" + props.showId)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, [props.showId]);

  const changeView = () => {
    if (parseInt(localStorage.getItem("view")) === 1) {
      localStorage.setItem("view", 2);
      setCastView(2);
    } else {
      localStorage.setItem("view", 1);
      setCastView(1);
    }
  };

  return (
    <>
      <article className="articleshowdiv">
        <img src={data.image.original} alt="" />
        <div className="showdescriptiondiv">
          <button className="backbutton" onClick={props.displayShows}>
            Back to Main page
          </button>
          <h1>{data.name}</h1>
          <Genre genredata={data.genres} />
          <p>{data.summary}</p>
        </div>
      </article>
      <button className="changeview" onClick={changeView}>
        Change view
      </button>
      <Cast showId={props.showId} castview={castview} />
    </>
  );
};
export default ShowPage;
