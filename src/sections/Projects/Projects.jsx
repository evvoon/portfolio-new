import styles from "./ProjectsStyles.module.css";
import chess from "../../assets/chess.png";
import stream from "../../assets/stream-app.png";
import maps from "../../assets/google-maps-clone.png";
import race from "../../assets/race-ball-game.png";
import stopwatch from "../../assets/stopwatch.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chess}
          link={"https://chess-evvoon.vercel.app/"}
          h3="Chess"
          p="Built with Reactjs"
        />

        <ProjectCard
          src={race}
          link={"https://r3f-race-game.vercel.app/"}
          h3="Race Ball Game"
          p="made with Threejs"
        />
        <ProjectCard
          src={maps}
          link={"https://google-maps-clone-topaz.vercel.app/"}
          h3="Google Maps Clone"
          p="Made with Mapbox API"
        />

        <ProjectCard
          src={stream}
          link={"https://github.com/evvoon/chat-application"}
          h3="Chat Application"
          p="Built with stream and Reactjs"
        />
        <ProjectCard
          src={stopwatch}
          link={"https://stopwatch-demo.vercel.app/"}
          h3="Stopwatch"
          p="Very first project :)"
        />
      </div>
    </section>
  );
}

export default Projects;
