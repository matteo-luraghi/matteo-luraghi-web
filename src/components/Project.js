import "./css/Project.css";

export default function Project({ project }) {
  function formateDate(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const showDate = `${month}/${date.getFullYear()}`;
    return showDate;
  }

  const startDate = new Date(project.start_date);
  const endDate = new Date(project.end_date);

  const showStartDate = formateDate(startDate);
  const showEndDate = formateDate(endDate);

  return (
    <a href={project.url} className="project-card">
      <div className="project-card-header">
        <img src={project.image} className="project-logo" alt={project.title} />
        <h3>{project.title}</h3>
      </div>
      <p>
        {showStartDate}-{showEndDate}
      </p>
      <p>{project.description}</p>
    </a>
  );
}
