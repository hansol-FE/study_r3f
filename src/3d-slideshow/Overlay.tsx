import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { scenes } from "./sceneValue";
import { motion, AnimatePresence } from "framer-motion";
import Description from "./Description";

export const slideAtom = atom(0);

export const Overlay = () => {
  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = useState(slide);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
  }, [slide]);
  return (
    <>
      <AnimatePresence mode="wait">
        <div
          className={`fixed z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between pointer-events-none text-white ${
            visible ? "" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          {/* <h1 className="text-center py-5">Welcome to my 3D Galaxy</h1> */}
          <h1 className="text-center py-5"></h1>

          <div className="absolute top-0 bottom-0 left-0 right-0 flex-1 flex items-center justify-between p-4">
            {/* 왼쪽 화살표  */}
            <svg
              onClick={() =>
                setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))
              }
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <div className="absolute top-0  left-0  z-[-1] w-[50%] h-[100%] bg-black opacity-80">
              <Description scene={scenes[displaySlide]} key={displaySlide} />
            </div>

            {/* 오른쪽 화살표 */}
            <svg
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
              onClick={() =>
                setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>

          <div className="bg-gradient-to-t z-[3] from-white/90 pt-20 pb-10 p-4 flex items-center flex-col text-center">
            <h1 className="text-5xl font-extrabold">
              {scenes[displaySlide].name}
            </h1>
            <p className="text-opacity-60 italic">
              {/* {scenes[displaySlide].description} */}
            </p>
            {/* <div className="flex items-center gap-12 mt-10">
              <div className="flex flex-col items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                  <p className="font-semibold text-3xl">
                    ${scenes[displaySlide].age}
                  </p>
                </div>
                <p className="text-sm opacity-80">Age</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    />
                  </svg>
                  <p className="font-semibold text-3xl">
                    {scenes[displaySlide].range}km
                  </p>
                </div>
                <p className="text-sm opacity-80">With one single charge</p>
              </div>
            </div> */}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

const Section = (props: any) => {
  const { children } = props;

  return (
    <motion.section
      className={`
    h-full w-full p-8  mx-auto
    flex flex-col items-start justify-center bg-red-700
    `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 1,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Wawa Sensei</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I make YouTube videos to help developers
        <br />
        learn how to build 3D apps
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
        rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
