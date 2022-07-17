import * as React from "React";
import { Link } from "gatsby";
const navLinkStyles = "h-full p-3 px-4 hover:underline underline-offset-4 decoration-2 decoration-emerald-500";


const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <div className="">
        <nav className="fixed w-full top-0 bg-gray-800 px-3 text-lg">
          <ul className="flex gap-2">
            <Link to="/"><li className={navLinkStyles}>Billy B.</li></Link>
            <Link to="/about"><li className={navLinkStyles}>About</li></Link>
            <Link to="/projects"><li className={navLinkStyles}>Projects</li></Link>
            <Link to="/now"><li className={navLinkStyles}>Now</li></Link>
          </ul>
        </nav>
        <div className="m-20">{children}</div>
      </div>
    </>
  );
};

export default Layout;
