import "./css/Project.css";

export default function Project({ project }) {
  return (
    <a href={project.url} className="project-card">
      <div className="project-card-header">
        <img src={project.image} className="project-logo" alt={project.title} />
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
    </a>
  );
}
