import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Resume from "../../assets/Vijayapremanath.pdf";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Game Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Vijayapremanath <br className="sm:hidden md:block" />
        Devaraja
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Game Developer <br />Working experience with Unity and Unreal Engine
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4"
      >
        <a
          href={Resume}
          download="Vijayapremanath_Resume.pdf"
          className="px-6 py-3 rounded-full border border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300 uppercase font-semibold tracking-wide"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
