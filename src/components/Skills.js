import './Skills.css';
import { MdComputer,  } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { BsFillPersonLinesFill, BsCode } from "react-icons/bs";

function Skills() {
  return (
    <main className="skills" id='skills'>
        <h2>Habilidades que domino</h2>
        <section className="skills_description">
            <div className="hard_skills">
                <div className="title_skills"><h3>Hard-Skills</h3> <MdComputer /></div>
                <div className="hard_skills_description">
                    <div>                    
                        <div>
                            <BsCode />
                        </div>
                        <h4>Front-End</h4>
                        <p>Ferramentas utilizadas para criação de páginas e sistemas web</p>
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
                            <li>
                                Context API
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <FaDatabase />
                        </div>
                        <h4>Back-End</h4>
                        <p>Ferramentas de controle de Banco de Dados e criação de APIs</p>
                        <ul>
                            <li>
                                MySQL
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Arquitetura Rest e Restful
                            </li>
                            <li>
                                NoSQL
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                Express
                            </li>
                            <li>
                                Sequelize
                            </li>
                            <li>
                                Mongoose
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                Autenticação JWT
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <GiGears />
                        </div>
                        <h4>Outras habilidades</h4>
                        <p>Tecnologias que utiilizo no dia a dia</p>
                        <ul>
                            <li>
                                Git e GitHub
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                Higher Order Functions
                            </li>
                            <li>
                                Testes Automatizados
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                Docker
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="soft_skills">
                <div className="title_skills"><h3>Soft-Skills</h3> <BsFillPersonLinesFill /></div>
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
    )
}
        
export default Skills;
