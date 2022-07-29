import * as React from "react";
import CodeItem from "./CodeItem";
import feather from "feather-icons";

const userIcon = feather.icons["user"].toSvg({ height: 24 });
const mapIcon = feather.icons["map-pin"].toSvg({ height: 24 });
const codeIcon = feather.icons["code"].toSvg({ height: 24 });

const InfoCard = () => {
  return (
    <div className="bg-gray-600 px-4 py-4 rounded-lg">
      <div className="w-fit m-auto text-xl p-1 mb-6 border-b border-slate-400">
        Billy Brown III
      </div>
      <div className="mr-1 my-5 text-center">
        <div
          className="w-fit m-auto"
          dangerouslySetInnerHTML={{ __html: userIcon }}
        />
        Software Engineer
      </div>
      <div className="mr-1 my-5 text-center">
        <div
          className="w-fit m-auto"
          dangerouslySetInnerHTML={{ __html: mapIcon }}
        />
        Vancouver, WA
        <div className="text-xs">(PDX metro area)</div>
      </div>
      <div className="mr-1 my-5 text-center">
        <div
          className="w-fit m-auto border-b"
          dangerouslySetInnerHTML={{ __html: codeIcon }}
        />
        <CodeItem name="JavaScript" />
        <CodeItem name="TypeScript" />
        <CodeItem name="React" />
        <CodeItem name="Node" />
      </div>
    </div>
  );
};

export default InfoCard;
