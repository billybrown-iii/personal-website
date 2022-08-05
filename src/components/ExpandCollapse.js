import * as React from "react";
import { useState } from "react";
import feather from "feather-icons";

const arrowIcon = feather.icons["triangle"].toSvg({
  height: 24,
  "stroke-width": 2,
});

const ExpandCollapse = ({ title, defaultState, children }) => {
  const [isExpanded, setIsExpanded] = useState(defaultState);

  const iconClasses =
    "h-fit p-1.5 mx-3 " + (isExpanded ? "rotate-180" : "rotate-90");

  return (
    <>
      <div
        className="flex group w-fit pr-3 border-b border-gray-700 hover:border-emerald-500 text-gray-200 hover:text-white"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div
          className={iconClasses}
          dangerouslySetInnerHTML={{ __html: arrowIcon }}
        />
        <div>
          <div className="select-none text-2xl">{title}</div>
        </div>
      </div>
      {isExpanded ? <div className="ml-12">{children}</div> : null}
    </>
  );
};

export default ExpandCollapse;
