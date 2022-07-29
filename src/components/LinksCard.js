import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/billybrown-iii"
        >
          <li className={linkStyles}>
            <span
              className="mr-1.5"
              dangerouslySetInnerHTML={{ __html: githubIcon }}
            />
            Github
          </li>
        </a>
        <a target="_blank" rel="noreferrer" href="mailto: link8495@gmail.com">
          <li className={linkStyles}>
            <span
              className="mr-1.5"
              dangerouslySetInnerHTML={{ __html: mailIcon }}
            />
            Email
          </li>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/billybrown-iii/"
        >
          <li className={linkStyles}>
            <span
              className="mr-1.5"
              dangerouslySetInnerHTML={{ __html: linkedinIcon }}
            />
            LinkedIn
          </li>
        </a>
        <a target="_blank" rel="noreferrer" href={data.file.publicURL}>
          <li className={linkStyles}>
            <span
              className="mr-1.5"
              dangerouslySetInnerHTML={{ __html: pageIcon }}
            />
            Resume
          </li>
        </a>
      </ul>
    </div>
  );
};

export default LinksCard;