import React from "react";
import { Link } from "react-router-dom";
import rules from "../src/images/image-rules.svg";
import rules2 from "../src/images/image-rules-bonus.svg";
import "./_home.scss";
function Home() {
  return (
    <div className="home_cont">
      <div className="link_cont">
        <Link to="/simple">
          <img src={rules} alt="" />
        </Link>
      </div>
      <div className="link_cont">
        <Link to="/hard">
          <img src={rules2} alt="" />
        </Link>
      </div>
      <div className="link_cont">
        <Link to="/third">
          <img src={rules2} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
