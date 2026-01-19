import { SiUnrealengine } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiBlender} from "react-icons/si";
import { SiPython } from "react-icons/si";
//import { SiCsharpdotnet } from "react-icons/si";
import { SiCplusplus  } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Unreal Engine",
     icon: SiUnrealengine
  },
  { skill: "Unity", 
    icon: SiUnity
   },
  { skill: "Blender",
     icon: SiBlender 
    },
  { skill: "Python",
     icon: SiPython 
    },
  /*{ skill: "C#",
     icon: SiCsharpdotnet
    },*/
  { skill: "C++",
     icon: SiCplusplus 
    },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
