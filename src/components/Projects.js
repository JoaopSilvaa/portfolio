import CardProject from "../components/CardProject";
import { projects } from '../dataProjects';
import './Projects.css';

function Projects() {
  return (
    <main className="mainProjects" id='projects'>
      <h1>Projetos desenvolvidos</h1>
      <div className="projects">
        {projects.map((project) => <CardProject key={project.id} project={project} />)}
      </div>
    </main>
  );
}

export default Projects;
