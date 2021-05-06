import "./style.scss";
import React, { useEffect, useState } from "react";
import Genre from "../Genre/Genre";
import Cast from "../Cast/Cast";
import { v4 as uuid } from "uuid";
const ShowPage = (props) => {
  const [data, setData] = useState({ image: {}, genres: [] });
  const [seasons, setSeasons] = useState([]);
  const [castview, setCastView] = useState(localStorage.getItem("view"));
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/" + props.showId)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
    fetch("https://api.tvmaze.com/shows/" + props.showId + "/seasons")
      .then((data) => data.json())
      .then((data) => setSeasons(data));
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
  function createMarkup() {
    return { __html: data.summary };
  }
  return (
    <>
      <button className="backbutton" onClick={props.displayShows}>
        Back to Main page
      </button>
      <article className="articleshowdiv">
        <img src={data.image.original} alt="" />
        <div className="showdescriptiondiv">
          <h1>{data.name}</h1>
          <Genre genredata={data.genres} />
          <p dangerouslySetInnerHTML={createMarkup()} />
          <h1>Seasons {seasons.length}</h1>
          <ul>
            {seasons.map((e) => (
              <li key={uuid()}>{e.premiereDate + " - " + e.endDate}</li>
            ))}
          </ul>
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
