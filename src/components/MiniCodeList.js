import * as React from "react";
import MiniCodeItem from "./MiniCodeItem";

const MiniCodeList = ({ techArr }) => {
  const codeItems = techArr.map((item, index) => (
    <span className="h-fit" key={index}>
      <MiniCodeItem name={item} />
    </span>
  ));
  return (
    <div className="flex flex-wrap h-fit w-4/5 md:w-1/2 mt-3 md:mt-0">
      {codeItems}
    </div>
  );
};

export default MiniCodeList;
