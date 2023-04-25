import React from "react";
import line from "../src/images/line.json";
import Lottie, { useLottie } from "lottie-react";

function Third() {
  return (
    <div className="lootie_cont">
      {/* <div className="lottie_item">
        <Lottie loop={false} animationData={line} />
      </div> */}
      <div className="lottie_item2">
        <Lottie loop={false} animationData={line} />
      </div>
    </div>
  );
}

export default Third;
