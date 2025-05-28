import { assets, infoList, toolsData } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 scroll-snap-start"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Profile Image with Hover Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="relative w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden group"
        >
          <Image
            src={assets.user_image}
            alt="Gopal Kumar"
            className="w-full rounded-3xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
            <p className="text-sm sm:text-base leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Developer. Builder. Curious by default. I write code that works,
              looks good, and gets noticed.
            </p>
          </div>
        </motion.div>

        {/* About Text + Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            Hey, I’m Gopal — a full stack developer who loves building cool
            stuff on the web. I enjoy working on everything from clean, snappy
            frontends to efficient, well-structured backends. I’m also big on
            making sure the things I build actually get seen — so I keep SEO and
            performance top of mind.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkTheme/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
