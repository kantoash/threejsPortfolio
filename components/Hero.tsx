"use client";

import React from "react";
import Image from "next/image";
import { PageInfo, Social } from "../typing";
import { urlFor } from "../lib/sanity.client";
import ComputersCanvas from '../components/Canvas/ComputersCanvas'
import { motion } from 'framer-motion'
import Header from "./Header";
interface Props {
  pageInfo: PageInfo;
  socials: Social[];
}

function Hero({ pageInfo, socials }: Props) {
  
  return (
    <div className="relative w-screen h-screen mx-auto ">
      <Header socials={socials}  />
      <div
        className={`sm:px-10 px-6 absolute inset-0 top-[100px] max-w-6xl mx-auto flex   items-start gap-5`}
      >
        <div className="">
          <h1 className="heroHeadText flex items-center gap-2">
            Hi, I'm <span className="text-[#915eff]">{pageInfo.name}</span>
            <Image
              src={urlFor(pageInfo.HeroImage).url()}
              alt=""
              height={100}
              width={100}
              className="h-20 w-20 rounded-full object-cover"
            />
          </h1>
          <p className="heroSubText">{pageInfo.role}</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="absolute xs:bottom-14 bottom-28 w-full flex justify-center items-center">
        <a href="#About">
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2  ">
            <motion.div animate={{ y:[0, 24, 0] }} transition={{ duration:1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary my-1" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
