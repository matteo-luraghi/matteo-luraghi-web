import { useEffect, useRef } from "react";
import "./css/Project.css";

export default function Project({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    // observer that observes when an element enters or leaves the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // function that runs when the visibility of an element in the viewport changes
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    // attach the project to the observer (each project has a different ref since it's a different component)
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // save the observed reference for cleanup
    const cardRefSaved = cardRef.current;

    // cleanup function
    return () => {
      if (cardRefSaved) {
        observer.unobserve(cardRefSaved);
      }
    };
  }, []);

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
    <div className="project-card-container">
      <a href={project.url} className="project-card noSelect" ref={cardRef}>
        <div className="project-card-header">
          <img
            src={project.image}
            className="project-logo"
            alt={project.title}
          />
          <div className="project-title-container">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-date">
              {showStartDate}-{showEndDate}
            </p>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </a>
    </div>
  );
}
