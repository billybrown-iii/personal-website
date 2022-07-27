import * as React from "react";
import feather from "feather-icons";
// @ts-ignore
import portrait from "../images/billy.jpg";

const userIcon = feather.icons["user"].toSvg({ height: 24 });
const mapIcon = feather.icons["map-pin"].toSvg({ height: 24 });
const codeIcon = feather.icons["code"].toSvg({ height: 24 });
const linkedInIcon = feather.icons["linkedin"].toSvg({ height: 16 });

const InfoCard = () => {
  return (
    <div className="bg-gray-600 px-8 py-4 rounded-lg">
      <div className="text-xl text-center mb-6">Billy Brown III</div>
      {/* <span dangerouslySetInnerHTML={{__html: linkedInIcon}}></span> */}
      {/* <img className="w-4/5 m-auto my-6 rounded-xl" src={portrait} /> */}
      <div className="flex mr-1 my-5">
        <span className="mr-1" dangerouslySetInnerHTML={{ __html: userIcon }} />
        Software Engineer
      </div>
      <div className="flex mr-1 my-5">
        <span className="mr-1" dangerouslySetInnerHTML={{ __html: mapIcon }} />
        Vancouver, WA
      </div>
      <div className="flex mr-1 my-5">
        <span className="mr-1" dangerouslySetInnerHTML={{ __html: codeIcon }} />
        JavaScript / React / Node
      </div>
    </div>
  );
};

export default InfoCard;
