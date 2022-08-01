import * as React from "react";
import MiniCodeItem from "./MiniCodeItem";

const ProjectCodeList = ({ techArr, children }) => {
  const codeItems = techArr.map((item, index) => (
    <span className="h-fit" key={index}>
      <MiniCodeItem name={item} />
    </span>
  ));
  return (
    <div className=" w-4/5 md:w-1/2">
      <div className="flex flex-wrap h-fit mt-3 md:mt-0">{codeItems}</div>
      {children}
    </div>
  );
};

export default ProjectCodeList;
