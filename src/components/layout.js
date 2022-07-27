import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
const navLinkStyles = "h-full p-3 px-6 hover:underline underline-offset-4 decoration-2 decoration-emerald-500";


const Layout = ({ pageTitle, children, selectedPage }) => {
  
  let indexStyles = navLinkStyles;
  let aboutStyles = navLinkStyles;
  let projectStyles = navLinkStyles;
  let nowStyles = navLinkStyles;

  if (selectedPage === "index") indexStyles += " underline"
  if (selectedPage === "about") aboutStyles += " underline"
  if (selectedPage === "projects") projectStyles += " underline"
  if (selectedPage === "now") nowStyles += " underline"
  
  return (
    <>
      <title>{pageTitle}</title>
      <div className="">
        <nav className="fixed w-full top-0 bg-gray-800 px-3 text-lg">
          <ul className="flex gap-2">
            <Link to="/"><li className={indexStyles}>Billy B.</li></Link>
            <Link to="/about"><li className={aboutStyles}>About</li></Link>
            <Link to="/projects"><li className={projectStyles}>Projects</li></Link>
            <Link to="/now"><li className={nowStyles}>Now</li></Link>
          </ul>
        </nav>
        <div className="w-4/5 sm:w-2/3 max-w-screen-md m-auto mt-28">{children}</div>
      </div>
    </>
  );
};

export default Layout;
