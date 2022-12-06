import './Contact.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <main className="mainContact" id='contact'>
        <h2>Fale comigo</h2>
        <section className="social">
          <a href='https://www.linkedin.com/in/joaoantoniosilvaa/'>Linkedin <FaLinkedin /></a>
          <a href='mailto:joaopsilva.dev@gmail.com'>Gmail <CgMail /></a>
          <a href='https://github.com/JoaopSilvaa'>GitHub <FaGithub /></a>
        </section>
    </main>
  );
}

export default Contact;
