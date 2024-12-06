import Project from "./Project";
import "./css/ProjectList.css";
import { getProjects } from "../projects/ProjectLoader";
import { useEffect, useState } from "react";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const projects = getProjects();
      setProjects(projects);
    } catch (error) {
      setError("Error Loading Projects");
      console.log("ERROR LOADING PROJECTS: " + error.message);
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    <section>
      {/* loading div */}
      {loading && (
        <div className="loading">
          <p>Loading projects...</p>
        </div>
      )}

      {/* error div */}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {/* projects div */}
      {!loading && !error && (
        <div className="projects-list">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
