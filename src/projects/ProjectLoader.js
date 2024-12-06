import projectsData from "./projects.json";

// sort ascendingly on end_date
function compareDate(a, b) {
  const dateA = new Date(a.end_date);
  const dateB = new Date(b.end_date);

  // if project is still on going, it has precedence
  if (isNaN(dateA)) {
    return -1;
  } else if (isNaN(dateB)) {
    return 1;
  }

  if (dateA > dateB) {
    return -1;
  } else if (dateA < dateB) {
    return 1;
  }
  return 0;
}

export const getProjects = () => {
  const filteredProjects = projectsData.filter(
    (project) => project.visible === true,
  );
  const sortedProjects = filteredProjects.sort(compareDate);
  const projects = sortedProjects.map((project) => {
    // add image path if needed
    project.image =
      // no image
      project.image === "" ||
        // already added path and extension
        project.image.includes(".webp") ||
        // image link
        project.image.includes("https://")
        ? project.image
        : `${process.env.PUBLIC_URL}/assets/projects/` +
        project.image +
        // file extension
        ".webp";
    return project;
  });
  return projects;
};
