import "./App.css";
import React, { useEffect, useState } from "react";
import uuid from "uuid";
import Header from "./Header/Header";
import Shows from "./Shows/Shows";
import ShowPage from "./ShowPage/ShowPage";
import Footer from "./Footer/Footer";
const App = (props) => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(0);
  const displayShow = (showId) => {
    setPage(2);
    setId(showId);
  };
  const displayShows = () => {
    setPage(1);
  };
  return (
    <>
      <Header />
      {page === 1 ? (
        <Shows displayShow={displayShow} />
      ) : (
        <ShowPage showId={id} displayShows={displayShows} />
      )}
      <Footer />
    </>
  );
};

export default App;
