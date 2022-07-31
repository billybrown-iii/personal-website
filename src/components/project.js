import * as React from "react";
import ExpandCollapse from "./ExpandCollapse";

/** Single project component.  Takes name as a prop, and takes text description as children */
const Project = ({ name, children }) => {
  //   let codeItems;
  //   let img;
  let title;

  switch (name) {
    case "bonsai":
      title = "Bonsai Notes";
      break;
    default:
      throw new Error("Project.js error: name not found.");
  }

  return (
    <ExpandCollapse name={title} size="large" defaultState={true}>
      <div className="flex">
        {/* code items go here */}
        {/* optional image goes here */}
        {/* external links go here */}
      </div>
      {children}
    </ExpandCollapse>
  );
};

export default Project;
