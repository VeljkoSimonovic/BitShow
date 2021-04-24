import "./style.scss";
import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { v4 as uuid } from "uuid";

const Shows = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [nameClass] = useState({ bela: "bela", zuta: "zuta" });

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  return (
    <>
      <Search data={data} setFilteredData={setFilteredData} />
      <article className="articlediv">
        {!data.length ? (
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        ) : !filteredData.length ? (
          <h1>No data matches your search</h1>
        ) : (
          filteredData.map((show, index) => {
            if (index < 50) {
              return (
                <div
                  className="showdiv"
                  onClick={() => props.displayShow(show.id)}
                  key={uuid()}
                >
                  <img src={show.image.medium} alt="" />
                  <div className="rating">{show.rating.average}</div>
                  <div
                    className={
                      show.rating.average > 8.5
                        ? nameClass.zuta
                        : nameClass.bela
                    }
                  >
                    <h3>{show.name}</h3>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </article>
    </>
  );
};

export default Shows;
