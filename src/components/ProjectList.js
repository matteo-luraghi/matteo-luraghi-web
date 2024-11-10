import Project from "./Project";
import "./css/ProjectList.css";
import { getProjects } from "../api/client";
import { useEffect, useState } from "react";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch projects from db
  useEffect(() => {
    getProjects()
      .then(({ data, error }) => {
        if (error) {
          throw error;
        }

        const new_data = data.map((project) => {
          // add image path if needed
          project.image =
            project.image === ""
              ? project.image
              : `${process.env.PUBLIC_URL}/assets/projects/` +
              project.image +
              // file extension
              ".svg";
          return project;
        });
        setProjects(new_data);
      })
      .catch((error) => {
        setError("Error loading projects");
        console.log("ERROR LOADING PROJECTS: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
