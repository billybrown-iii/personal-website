import * as React from "react";

const ProjectImage = ({ children }) => {
  return (
    <div id="img" className="w-4/5 md:w-1/2 md:-mt-10 mx-auto rounded-xl">
      {children}
    </div>
  );
};

export default ProjectImage;
