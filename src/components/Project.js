import "./css/Project.css";

export default function Project({ project }) {
  return (
    <div className="project-card">
      <img src={project.img} className="project-logo" alt={project.title} />
      <a href={project.url}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  );
}
