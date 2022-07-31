import * as React from "react";
import feather from "feather-icons";

const githubIcon = feather.icons["github"].toSvg({ height: 24 });
const mailIcon = feather.icons["mail"].toSvg({ height: 24 });
const linkedinIcon = feather.icons["linkedin"].toSvg({ height: 24 });
const pageIcon = feather.icons["file-text"].toSvg({ height: 24 });

const linkStyles = `
flex
my-1 py-2
text-gray-300 underline underline-offset-2
hover:decoration-emerald-400 hover:text-white
`;

/** External link with icon.  Takes in name, iconName, and url as props. */
const ExternalLink = ({ name, iconName, url }) => {
  let icon;

  switch (iconName) {
    case "github":
      icon = githubIcon;
      break;
    case "email":
      icon = mailIcon;
      break;
    case "linkedin":
      icon = linkedinIcon;
      break;
    case "page":
      icon = pageIcon;
      break;
    default:
      throw new Error("ExternalLink.js error: icon name not found.");
    // icon = githubIcon;
  }
  return (
    <a target="_blank" rel="noreferrer" href={url}>
      <li className={linkStyles}>
        <span className="mr-1.5" dangerouslySetInnerHTML={{ __html: icon }} />
        {name}
      </li>
    </a>
  );
};

export default ExternalLink;
