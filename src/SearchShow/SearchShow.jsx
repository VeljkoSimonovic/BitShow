import "./style.scss";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
const SearchShow = (props) => {
  const [searchvalue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=" + searchvalue)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [searchvalue]);

  return (
    <div className="searchdiv">
      <input
        type="text"
        value={searchvalue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="&#x2315; Search for a show"
      />
      {data.length ? (
        <ul>
          {data.map((e) => (
            <li key={uuid()} onClick={() => props.displayShow(e.show.id)}>
              {e.show.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchShow;
