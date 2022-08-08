import * as React from "react";
import feather from "feather-icons";

const linkStyles = `
flex
my-1 py-2
text-gray-300 underline underline-offset-2
hover:decoration-emerald-400 hover:text-white
`;

/** External link with icon.  Takes in name, iconName, and url as props. */
const ExternalLink = ({ name, iconName, url }) => {
  const icon = feather.icons[iconName].toSvg({ height: 24 });

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
