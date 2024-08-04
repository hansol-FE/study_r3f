import { motion } from "framer-motion";
import { fadeUpVariants, staggerVariants } from "./motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";

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

const Jupiter = (props: any) => {
  const { scene } = props;

  return (
    <div className="h-full">
      <motion.section
        className=" h-full w-full p-[170px] mx-auto flex flex-col items-start "
        variants={staggerVariants}
        initial="initial"
        animate="animate"
        // initial={{
        //   opacity: 0,
        //   y: 50,
        // }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   transition: {
        //     duration: 1,
        //     delay: 1,
        //   },
        // }}
      >
        <motion.h1
          className="text-6xl font-extrabold leading-snug"
          variants={fadeUpVariants}
        >
          {scene.nameK}
        </motion.h1>

        <ul>
          {scene.description.map((desc: string, index: number) => (
            <motion.li variants={fadeUpVariants} key={index}>
              <p className="text-lg text-white mt-4">{desc}</p>
            </motion.li>
          ))}
        </ul>

        {/* <motion.div whileInView={"visible"}>
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
        </motion.div> */}
      </motion.section>
    </div>
  );
};

export default Jupiter;
