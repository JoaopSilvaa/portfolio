import { Link } from "react-router-dom";

function Header() {
  return (
    <main>
        <span>João Antônio</span>
        <nav>
            <input type='checkbox'/>
            <label htmlFor='menu_box'>
                <span></span>
            </label>

            <ul className='menu_box'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </main>
  );
}

export default Header;
