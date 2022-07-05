import Footer from "../components/Footer";
import Header from "../components/Header";
import './Home.css';
import { MdComputer,  } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import japs from '../images/japs.jpg';

function Home() {
  return (
    <div>
        <Header />
        <main className="mainHome">
          <div className="aboutMe">
              <img src={japs} alt='foto de João Antônio'/>
            <section>
              <p>
                Sou um Desenvolvedor Web FullStack que adora música, jogos e animes.
                Se você quer encontrar uma pessoa disposta a aprender, a ajudar e que busca superar os desafios, você veio ao lugar certo!
                Aqui você pode encontrar alguns dos projetos que já desenvolvi e entrar em contato comigo.            
              </p>
              <p>
                Desde minha infância sou apaixonado por tecnologia e com essa paixão cursei Técnico em Informática, lá tive meus primeiros contatos com 
                programação. Mas com o curso que faço na Trybe que estou me tornando um Desenvolvedor de Software, realizando meu sonho de aprender e me
                aprofundar nessa área que é incrível e com ela, poder ajudar as pessoas.
              </p>
            </section>
          </div>
          <p>Aqui estão algumas das minhas Skills</p>
          <section className="skills">
            <div>
            <div className="titleSkills"><h3>Hard-Skills</h3> <MdComputer /></div>
            <ul>
              <li>
                Front-End
                <ul>
                  <li>
                    React
                  </li>
                  <li>
                    Redux
                  </li>
                  <li>
                    Ciclo de Vida
                  </li>
                  <li>
                    RTL - React Test Library
                  </li>
                  <li>
                    React Hooks
                  </li>
                </ul>
              </li>
              <li>
                Back-End
                <ul>
                  <li>
                    Docker
                  </li>
                  <li>
                    SQL
                  </li>
                  <li>
                    Node.js
                  </li>
                  <li>
                    Arquitetura Rest e Restful
                  </li>
                </ul>
              </li>
              <li>
                Fundamentos
                <ul>
                  <li>
                    Git e GitHub  
                  </li>
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    Higher Order Functions
                  </li>
                  <li>
                     Testes Unitários 
                  </li>
                </ul>
              </li>
            </ul>
            </div>
            <div>
            <div className="titleSkills"><h3>Soft-Skills</h3> <BsFillPersonLinesFill /></div>
            <ul>
              <li>
                Metodologia ágil
              </li>
              <li>
                Comunicação
              </li>
              <li>
                Liderança        
              </li>
              <li>
                Criatividade        
              </li>
              <li>
                Pensamento Crítico        
              </li>
            </ul>
          </div>
          </section>
        </main>
        <Footer />
    </div>
  );
}

export default Home;
