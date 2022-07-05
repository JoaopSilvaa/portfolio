import './Footer.css';
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <p>Desenvolvido por João Antônio</p>
        <a href='https://github.com/JoaopSilvaa'><FaGithub /></a>
    </div>
  );
}

export default Footer;
