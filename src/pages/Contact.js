import Footer from "../components/Footer";
import Header from "../components/Header";
import './Contact.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <div>
        <Header />
        <main className="mainContact">
            <h2>Você pode entrar em contato comigo por minhas redes sociais</h2>
            <section className="social">
              <a href='https://www.linkedin.com/in/joaoantoniosilvaa/'>Linkedin <FaLinkedin /></a>
              <a href='mailto:joaopsilva.dev@gmail.com'>Gmail <CgMail /></a>
              <a href='https://github.com/JoaopSilvaa'>GitHub <FaGithub /></a>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default Contact;
