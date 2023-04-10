'use client'

import { web, React, blockchain } from "../../assets";
import { motion } from "framer-motion";
import { PageInfo } from "../../typing";
import { Tilt } from "react-tilt";
import Image from "next/image";

export const services = [
  {
    title: "Full Developer",
    img: web.src,
  },
  {
    title: "React Developer",
    img: React.src,
  },
  {
    title: "BlockChain Developer",
    img: blockchain.src,
  },
];

interface Props {
  pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-10 relative sm:p-6   ">
      <div className="absolute top-3 ">
        <motion.div
          initial={{
            x: -250,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <h2 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-10 heroSubText p-5 ">
            Overview
          </h2>
          <p className="heroDescription ">{pageInfo.backgroundInfomation}</p>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center items-center w-full gap-5  ">
          {services.map((service, index) => (
            <Tilt
              options={{ max: 45, scale: 1, speed: 450 }}
              className="h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 gap-5 "
            >
              <motion.div
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 0.75,
                  delay: 0.5 * index,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                className="p-2 rounded-2xl green-pink-gradient shadow-card"
              >
                <div className="bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
                  <h2>{service.title}</h2>
                  <Image
                    src={`${service.img}`}
                    alt=""
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}
