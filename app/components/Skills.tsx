import React from "react";
import BallCanvas from "../components/Canvas/BallCanvas";
import {
  html5,
  css3,
  tailwind,
  javascript,
  typescript,
  react,
  nextjsIcon,
  redux,
  firebase,
  nodejs,
  mongodb,
  chatgpt,
  solidity,
  hardhatIcon,
  ipfs,
} from "../../assets";

export const technologies = [
  {
    icon: html5.src,
  },
  {
    icon: css3.src,
  },
  {
    icon: javascript.src,
  },
  {
    icon: typescript.src,
  },
  {
    icon: tailwind.src,
  },
  {
    icon: react.src,
  },
  { 
    icon: nextjsIcon.src 
  },
  {
    icon: redux.src,
  },
  {
    icon: firebase.src,
  },
  {
    icon: nodejs.src,
  },
  {
    icon: mongodb.src,
  },
  {
    icon: chatgpt.src,
  },
  {
    icon: solidity.src,
  },
  {
    icon: hardhatIcon.src,
  },
  {
    icon: ipfs.src
  }
];

function Skills() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-10">
      <div className="w-full flex justify-center">
        <h1 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-10 p-5 heroSubText">
          Skills
        </h1>
      </div>

      {technologies.map((technology, index) => (
        <div className="w-28 h-28 mt-10">
          <BallCanvas icon={technology.icon} key={index} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
