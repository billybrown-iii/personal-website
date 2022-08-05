import * as React from "react";

const MiniCodeItem = ({ name }) => {
  let color;
  let img;

  switch (name) {
    case "JavaScript":
      color = "border-yellow-400";
      break;
    case "TypeScript":
      color = "border-blue-400";
      break;
    case "React":
      color = "border-cyan-400";
      break;
    case "Node":
      color = "border-green-400";
      break;
    case "Tailwind":
      color = "border-teal-400";
      break;
    case "Mathematics":
      color = "border-cyan-400";
      break;
    case "MaterialUI":
      color = "border-blue-400";
      break;
    default:
      throw new Error("CodeItem error: name not found.");
  }

  return (
    <div className={"w-fit py-1 px-3 m-1.5 mx-2 border rounded-lg " + color}>
      {name}
    </div>
  );
};

export default MiniCodeItem;
