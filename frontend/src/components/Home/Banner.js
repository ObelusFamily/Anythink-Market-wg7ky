import React from "react";
import logo from "../../imgs/logo.png";
import { useState } from "react";
import agent from "../../agent";

const Banner = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const searchbyTitle = (searchvalue) => {
    setSearchInput(searchvalue);

    if (searchInput.length > 3) {
      console.log("hey this is" + searchvalue);
      props.onClickTitle(
        searchInput,
        (page) => agent.Items.byTitle(searchInput, page),
        agent.Items.byTitle(searchInput)
      );
    }
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            className="rounded mx-4 px-4 py-2 w-50"
            placeholder="What is it that you truly desire?"
            onChange={(e) => searchbyTitle(e.target.value)}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
