import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ExternalLink from "./ExternalLink";

const LinksCard = () => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }, name: { eq: "resume" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="p-2 border border-gray-500 rounded-lg">
      <ul className="m-auto w-fit">
        <ExternalLink
          name="Github"
          iconName="github"
          url="https://github.com/billybrown-iii"
        />
        <ExternalLink
          name="Resume"
          iconName="file-text"
          url={data.file.publicURL}
        />
        <ExternalLink
          name="LinkedIn"
          iconName="linkedin"
          url="https://www.linkedin.com/in/billybrown-iii/"
        />
        <ExternalLink
          name="Email"
          iconName="mail"
          url="mailto: link8495@gmail.com"
        />
      </ul>
    </div>
  );
};

export default LinksCard;
