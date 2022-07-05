import CardProject from "../components/CardProject";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { projects } from '../dataProjects';
import './Projects.css';

function Projects() {
  return (
    <div>
        <Header />
        <main className="mainProjects">
        <h1>Projetos desenvolvidos</h1>
            <p>Abaixo estão alguns projetos desenvolvidos por mim. Fique a vontade para acessar, visualizar e contribuir.</p>
            <div className="projects">
              {projects.map((project) => <CardProject key={project.id} project={project} />)}
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default Projects;
