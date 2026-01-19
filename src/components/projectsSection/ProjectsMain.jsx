import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "john lemon's haunted jaunt game",
    align: "right",
    video: "/videos/project-1.mp4",
    link: "https://github.com/IamVijayapremanath/Voice-Controlled-Escape-Room-Game.git",
  },
  {
    name: "Multiplayer Tank game",
    align: "left",
    video: "/videos/project-2.mp4",
    link: "https://github.com/IamVijayapremanath/Multiplayer-Tank-game.git",
  },

  {
    name: "Multiplayer Paramapatham board game",
    align: "right",
    video: "/videos/project-3.mp4",
    link: "https://github.com/IamVijayapremanath/Paramapatham_board_game.git",
  }

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              align={project.align}
              video={project.video}  // Pass video prop
              link={project.link}    // Added link prop which was missing
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;