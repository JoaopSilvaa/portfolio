import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderProjects from '../components/HeaderProjects';
import { projects } from '../dataProjects';
import './ProjectsDetails.css';

function ProjectDetails({ match }) {
    const [project, setProject] = useState();

    useEffect(() => {
        const { id } = match.params;
        const projeto = projects.filter((element) => element.id === Number(id));
        setProject(projeto[0]);
    }, [match.params]);
    
    return (
        project && <main>
                <HeaderProjects />
                <section className='mainProject'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <p className='technologies'><b><u>Tecnologias utilizadas: </u></b><br />{project.technologies}</p>
                    <img src={project.gif} alt={project.title} className='imgProject'/>
                    Clique <a className='linkForGithub' href={project.url} target="_blank" rel="noreferrer">aqui</a> para acessar o repositório.
                    </section>
                <Footer />
            </main>
    );
  }
  
  export default ProjectDetails;
  