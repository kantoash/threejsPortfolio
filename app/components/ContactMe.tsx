"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
// import EarthCanvas from "./Canvas/EarthCanvas";
// import StarsCanvas from "./Canvas/StarsCanvas";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "service_mb4f5s3",
        "template_7o8p95w",
        {
          from_name: form.name,
          to_name: "Ash",
          from_email: form.email,
          to_email: "kentoashketchum@gmail.com",
          message: form.message,
        },
        "90gAe9Hw5FGAv9NFr"
      )
      .then(() => {
        setLoading(false);
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (err) => {
        setLoading(false)
        console.log(err);
      });
  };

  return (
    <div
      className={`relative xl:mt-5 mb-12 flex xl:flex-row flex-col-reverse gap-10 overflow-y-auto scrollbar-none max-w-5xl mx-auto `}
    >
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className=" bg-black-100 p-8 rounded-2xl m-5 "
      >
        <p className="heroSubText"> Get in touch </p>
        <p className="heroSubText">Number: 88447239142</p>
        <h3 className="heroHeadText">Contact</h3>
        <form
          onSubmit={handleSubmit}
          className=" mt-8 flex flex-col gap-6 mb-20"
        >
          <input
            type="text"
            name="name"
            placeholder="What's your good name?"
            value={form.name}
            onChange={handleChange}
            className="FormInput"
          />
          <input
            type="email"
            name="email"
            placeholder="What's your email address?"
            value={form.email}
            onChange={handleChange}
            className="FormInput"
          />
          <input
            type="text"
            name="message"
            placeholder="What you want to say?"
            value={form.message}
            onChange={handleChange}
            className="FormInput"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <StarsCanvas /> */}
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
}

export default ContactMe;
