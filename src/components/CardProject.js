import { Link } from "react-router-dom";
import './CardProject.css';

function CardProject({project}) {
    return (
      <Link className='linkCardProject' to={`/projectDetails/${project.id}`}>
        <div className="cardProject">
          <p>{project.title}</p>
          <img className='imgCardProject' src={project.gif} alt={project.title}/>
        </div>
      </Link>
    );
  }
  
  export default CardProject;
  