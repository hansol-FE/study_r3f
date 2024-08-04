import { motion } from "framer-motion";

const gridVariants = {
  initial: (i: number) => ({
    opacity: 1,
    scaleY: 1,
    transition: {
      // delay: i * 0.05,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: i,
    },
  }),
  animate: (i: number) => ({
    opacity: 0,
    scaleY: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: i,
    },
  }),
  exit: {
    opacity: 0,
    scaleY: 0,
  },
};

const UnmountGridVariants = {
  initial: {
    opacity: 0,
    scaleY: 0,
  },
  animate: {
    opacity: 0,
    scaleY: 0,
  },
  exit: (i: number) => ({
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: i,
    },
  }),
};

// const GridTile = ({ i }: { i: number }) => (
const GridTile = () => (
  <motion.div
    className="grid-tile"
    custom={Math.random()}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={gridVariants}
  />
);

const BottomGridTile = () => (
  <motion.div
    className="bottom-grid-tile"
    custom={Math.random()}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={UnmountGridVariants}
  />
);

const Grid2 = () => {
  const tiles = [];
  for (let i = 0; i < 110; i++) {
    tiles.push(<GridTile key={i} />);
  }

  const bottom_tiles = [];
  for (let i = 0; i < 110; i++) {
    bottom_tiles.push(<BottomGridTile key={i} />);
  }

  return (
    <div className="h-full">
      <SkillsSection />

      <motion.div className="grid_transition">{tiles}</motion.div>

      <motion.div className="grid_transition">{bottom_tiles}</motion.div>
    </div>
  );
};

export default Grid2;

const Section = (props: any) => {
  const { children } = props;

  return (
    <motion.section
      className={`
    h-full w-full p-8  mx-auto
    flex flex-col items-start justify-center bg-black-700
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
