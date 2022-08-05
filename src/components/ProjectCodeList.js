import * as React from "react";
import MiniCodeItem from "./MiniCodeItem";

const ProjectCodeList = ({ techArr }) => {
  const codeItems = techArr.map((item, index) => (
    <span className="h-fit" key={index}>
      <MiniCodeItem name={item} />
    </span>
  ));
  return <div className="flex flex-wrap h-fit w-full my-1">{codeItems}</div>;
};

export default ProjectCodeList;
