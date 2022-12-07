import { Link } from 'react-router-dom';
import './HeaderProjects.css';

function HeaderProjects() {
  return (
    <main className="header_projects">
        <h1>Portfólio de João Antônio</h1> 
        <Link className='nav_item_projects' to='/portfolio/home'>
          Home
        </Link>
    </main>
  );
}

export default HeaderProjects;
