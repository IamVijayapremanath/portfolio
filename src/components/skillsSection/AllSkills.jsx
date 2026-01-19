import SingleSkill from "./SingleSkill";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
