import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ExpandCollapse from "./ExpandCollapse";
import MiniCodeItem from "./MiniCodeItem";
import ExternalLink from "./ExternalLink";

/** Single project component.
 * Takes in the following children:
 * Tech list
 * Image
 * Description (markdown)
 */
const Project = ({ title, children }) => {
  return (
    <ExpandCollapse title={title} defaultState={true}>
      <div className="flex flex-wrap flex-row-reverse justify-end">
        {children}
      </div>
    </ExpandCollapse>
  );
};

export default Project;
