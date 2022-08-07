import React from "react";
import logo from "../../imgs/logo.png";
import { useState, useEffect } from "react";
import agent from "../../agent";

const Banner = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (searchInput.length >= 3) {
      props.onClickTitle(
        searchInput,
        (page) => agent.Items.byTitle(searchInput, page),
        agent.Items.byTitle(searchInput)
      );
    }
  }, [searchInput]);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">
            A place to{" "}
            <button id="search-btn" onClick={() => setClicked(true)}>
              get
            </button>
          </span>
          {clicked ? (
            <input
              id="search-box"
              className="rounded mx-4 px-4 py-2 w-50"
              placeholder="What is it that you truly desire?"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          ) : null}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
