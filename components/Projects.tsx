"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../typing";
import { urlFor } from "../lib/sanity.client";
import { Tilt } from "react-tilt";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {

  const truncate = (description: string, length: number) => {
    let returnDes = description;
    if (description.length > length) {
      returnDes = "";
      returnDes = description.slice(0, length) + "...";
    }
    return returnDes;
  };
  
  return (
    <div className="h-screen p-8 sm:p-6 overflow-y-auto scrollbar-none ">
      <motion.div
        initial={{
          x: -250,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <h2 className="heroHeadText">Projects</h2>
        <p className="heroDescription">
          Following projects showcases my skills through real-world examples of
          my work. Each project is briefly described with links to live demos in
          it. It reflects my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </p>
      </motion.div>
      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
            <motion.div
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.75,
                delay: 0.5 * index,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="bg-tertiary p-2 rounded-2xl w-[300px] sm:w-[360px] "
            >
            <Link href={project.linkToBuild}>
            <div className=" w-full flex flex-col shadow shadow-blue-200 overflow-hidden rounded p-2">
                <img
                  src={urlFor(project.image).url()}
                  alt=""
                  className="w-full rounded object-cover"
                />
                <h2 className="text-white font-[18px] sm:font-[20px] ">
                  {project.title}
                </h2>
                <p className="text-white text-[12px] sm:text-[15px] ">
                  {truncate(project.description, 180)}
                </p>
                <div className="flex flex-wrap mt-2  gap-1">
                {project.technologies.map((tech) => (
                  <h3 className="text-[8px] md:text-[10px] text-white ">
                    {`#${tech?.title ? tech?.title : 'tech'}`}
                  </h3>
                ))}
                </div>
              </div>
            </Link>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
