import "./style.scss";
import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setsearchValue] = useState("");

  const onSearch = (e) => {
    setsearchValue(e.target.value);
    const filtered = props.data.filter((element) => {
      return element.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    props.setFilteredData(filtered);
  };
  return (
    <input
      type="text"
      value={searchValue}
      onChange={onSearch}
      placeholder="&#x2315; Search among popular shows"
    />
  );
};
export default Search;
