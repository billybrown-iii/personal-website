// @ts-nocheck
import * as React from "react";
// import tsLogo from "../images/TS.svg";
import jsLogo from "../images/JS.svg";
import reactLogo from "../images/React.svg";
import nodeLogo from "../images/Node.svg";
import cSharpLogo from "../images/csharp.svg";
import sqlIcon from '../images/db.svg'

// Have two sizes?
const CodeItem = ({ name }) => {
  let color;
  let img;

  switch (name) {
    case "JavaScript":
      color = "border-yellow-400";
      img = jsLogo;
      break;
    // case "TypeScript":
    //   color = "border-blue-400";
    //   img = tsLogo;
    //   break;
    case "React":
      color = "border-cyan-400";
      img = reactLogo;
      break;
    case "Node":
      color = "border-green-400";
      img = nodeLogo;
      break;
    case "C#":
      color = "border-violet-400";
      img = cSharpLogo;
      break;
    case "SQL":
      color = "border-amber-500";
      img = sqlIcon;
      break;
    default:
      throw new Error("CodeItem error: name not found.");
  }

  return (
    <div
      className={
        "flex items-center w-full max-w-[10rem] mx-auto my-2 px-2 border rounded-lg " + color
      }>
      <div>
        <img className="w-4 md:w-5 py-1" src={img} alt="Coding language icon" />
      </div>
      <div className={"ml-2 pl-2 my-1 border-l border-slate-400"}>{name}</div>
    </div>
  );
};

export default CodeItem;
