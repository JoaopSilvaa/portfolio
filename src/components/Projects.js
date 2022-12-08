import CardProject from "../components/CardProject";
import { projects } from '../dataProjects';
import './Projects.css';

function Projects() {
  return (
    <main className="main_projects" id='projects'>
      <h2>Projetos desenvolvidos</h2>
      <div className="projects">
        {projects.map((project) => <CardProject key={project.id} project={project} />)}
      </div>
    </main>
  );
}

export default Projects;
