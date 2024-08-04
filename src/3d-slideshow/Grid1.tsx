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

const Grid1 = () => {
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
      <AboutSection />

      <motion.div className="grid_transition">{tiles}</motion.div>

      <motion.div className="grid_transition">{bottom_tiles}</motion.div>
    </div>
  );
};

export default Grid1;
const Section = (props: any) => {
  const { children } = props;

  return (
    <motion.section
      className={`
    h-full w-full p-8  mx-auto
    flex flex-col items-start justify-center 
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
        Hi, I'm Hansol
        <br />
        <span className="bg-white px-1 italic">hansol</span>
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
        내용내용내용
        <br />
        내용내용내용 내용내용내용 내용내용내용
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
