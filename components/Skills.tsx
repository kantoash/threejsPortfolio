"use client";

import React from "react";
import BallCanvas from "../components/Canvas/BallCanvas";
import { technologies } from '../Constants'

function Skills() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-10">
      <div className="w-full flex justify-center">
        <h1 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-10 p-5 heroSubText">Skills</h1>
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
