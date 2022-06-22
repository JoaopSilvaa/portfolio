import Footer from "../components/Footer";
import Header from "../components/Header";
import { projects } from '../dataProjects';

function Projects() {
  return (
    <div>
        <Header />
        <main>
            <h1>Projetos desenvolvidos</h1>
            <p>Abaixo estão listados alguns projetos desenvolvidos por mim, com seu link do GitHub. Fique a vontade para acessar, visualizar e contribuir.</p>
            
        </main>
        <Footer />
    </div>
  );
}

export default Projects;
