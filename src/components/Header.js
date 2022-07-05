import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <main className="header-top">
        <nav className='hamburguer-menu'>
            <input type='checkbox' id='menu_toggle'/>
            <label htmlFor='menu_toggle' className='menu_btn'>
                <span></span>
            </label>

            <ul className='menu_box'>
                <li><Link to='/home' className='menu_item'>Home</Link></li>
                <li><Link to='/projects' className='menu_item'>Projects</Link></li>
                <li><Link to='/contact' className='menu_item'>Contact</Link></li>
            </ul>
        </nav>
        <h1>Portfólio de João Antônio</h1>
    </main>
  );
}

export default Header;
