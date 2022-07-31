import * as React from "react";
import { useState } from "react";
import feather from "feather-icons";

const arrowIcon = feather.icons["triangle"].toSvg({
  height: 24,
  "stroke-width": 3,
});

const ExpandCollapse = ({ name, size, defaultState, children }) => {
  const [isExpanded, setIsExpanded] = useState(defaultState);

  const largeIconClasses =
    "p-3 mx-6 rounded-full group-hover:bg-gray-600 " +
    (isExpanded ? "rotate-180" : "rotate-90");

  const largeTitleClasses = "text-2xl underline";
  const smallTitleClasses = "";

  return (
    <>
      <div
        className="flex group w-fit pr-3"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div
          className={"h-fit " + largeIconClasses}
          dangerouslySetInnerHTML={{ __html: arrowIcon }}
        />
        <div>
          <div
            className={
              "select-none mb-6 pt-1.5 " +
              (size === "large" ? largeTitleClasses : smallTitleClasses)
            }
          >
            {name}
          </div>
          {isExpanded ? <div>{children}</div> : null}
        </div>
      </div>
    </>
  );
};

export default ExpandCollapse;
