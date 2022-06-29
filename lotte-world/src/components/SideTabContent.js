import React, { memo } from "react";

import Img from "../assets/images/components/enjoy.jpg";
import Img2 from "../assets/images/components/enjoy2.jpg";

const SideTabContent = memo(({ tab }) => {
  return [
    <div className="sidetab-mid">
      <img src={Img} alt="" />
      <p>오거스후룸</p>
    </div>,
    <div className="sidetab-mid">
      <img src={Img2} alt="" />
      <p>미니 퍼레이드</p>
    </div>,
  ][tab];
});

export default SideTabContent;
