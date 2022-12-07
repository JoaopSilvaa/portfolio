import './Footer.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp,  } from "react-icons/fa";

function Footer() {
  return (
    <main className="footer">
        <section>
          <div className="social">
            <a href='https://www.linkedin.com/in/joaoantoniosilvaa/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href='https://github.com/JoaopSilvaa' target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href='mailto:joaopsilva.dev@gmail.com' target="_blank" rel="noreferrer"><FaEnvelope /></a>
            <a href='https://wa.me/5587996806246' target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
          <p>Desenvolvido por João Antônio</p> 
        </section>
    </main>
  );
}

export default Footer;
