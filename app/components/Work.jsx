import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Every project is a blend of creativity and problem-solving. I love
        turning ideas into meaningful solutions that make an impact.
        <br />
        Take a look at my latest projects below—I’d love to hear your thoughts!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-xl aspect-[4/3] bg-black block group shadow-lg"
            key={index}
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 group-hover:from-black/60 group-hover:to-black/60 transition-all duration-300" />

            <div className="absolute top-4 w-full text-center z-10 px-2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 opacity-90">
              <h2 className="text-white text-lg font-semibold">
                {project.title}
              </h2>
            </div>

            <div className="absolute bottom-4 w-full text-center z-10 px-4 transition-all duration-300 group-hover:translate-y-0.5 group-hover:opacity-100 opacity-90">
              <p className="text-white text-sm">{project.description}</p>
            </div>

            <div className="absolute top-3 right-3 text-white opacity-60 group-hover:opacity-100 transition z-10">
              <Image src={assets.send_icon} alt="Link icon" className="w-4" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover "
        href=""
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
