import './Header.css';

function Header() {
  return (
    <main className="header">
        <h1>Portfólio de João Antônio</h1>
        <ul className='nav_bar'>
            <li className='nav_item'><a href='/home/#skills'>Habilidades</a></li>
            <li className='nav_item'><a href='/home/#projects'>Projetos</a></li>
            <li className='nav_item'><a href='/home/#contact'>Contato</a></li>
        </ul>
    </main>
  );
}

export default Header;
