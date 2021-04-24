import "./style.scss";
import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setsearchValue] = useState("");

  const onSearch = (e) => {
    setsearchValue(e.target.value);
    const filtered = props.data.filter((element) => {
      console.log(element.name, e.target.value);
      return element.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    props.setFilteredData(filtered);
  };
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={onSearch}
    />
  );
};
export default Search;
