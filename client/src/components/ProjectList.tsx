import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[25px]">
      {[1, 2, 3].map((id) => (
        <ProjectCard key={id} />
      ))}
    </div>
  );
};

export default ProjectList;
