import './About.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import japs from '../images/japs.jpg';

function About() {
  return (
    <main className="about_me">
        <img src={japs} alt='foto de João Antônio' />
        <section className='text_about'>
            <h2>
                Olá, tudo bem? Espero que sim! <br />
                Sou João Antônio
            </h2>
            <p>
                Desenvolvedor Fullstack, formado pela Trybe, em processo de especialização em QA pela Let's Code from Ada.
                Técnico em Informática formado pelo IF Sertão Pernambucano.
            </p>
            <div className='button_go_contact'>
                <a href="#contact">ENTRAR EM CONTATO</a>
            </div>
            <div className='icons_about'>
                <a href='https://www.linkedin.com/in/joaoantoniosilvaa/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href='mailto:joaopsilva.dev@gmail.com' target="_blank" rel="noreferrer"><FaEnvelope /></a>
                <a href='https://github.com/JoaopSilvaa' target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
        </section>
    </main>
  )
}

export default About;
