import Project from "./Project";
import "./css/ProjectList.css";

export default function ProjectList({ projects }) {
  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}
