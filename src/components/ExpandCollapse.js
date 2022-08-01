import * as React from "react";
import { useState } from "react";
import feather from "feather-icons";

const arrowIcon = feather.icons["triangle"].toSvg({
  height: 24,
  "stroke-width": 3,
});

const ExpandCollapse = ({ title, defaultState, children }) => {
  const [isExpanded, setIsExpanded] = useState(defaultState);

  const iconClasses =
    "h-fit p-3 mx-6 rounded-full group-hover:bg-gray-600 " +
    (isExpanded ? "rotate-180" : "rotate-90");

  return (
    <>
      <div
        className="flex group w-fit pr-3"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div
          className={iconClasses}
          dangerouslySetInnerHTML={{ __html: arrowIcon }}
        />
        <div>
          <div className="select-none mb-4 pt-1.5 text-2xl underline">
            {title}
          </div>
        </div>
      </div>
      {isExpanded ? <div className="ml-12">{children}</div> : null}
    </>
  );
};

export default ExpandCollapse;
