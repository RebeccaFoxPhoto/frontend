import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav id='nav-bar'>
      <Link to='about'>About</Link>
      <Link to='Shop'>Shop</Link>
      <Link to='Service'>Services</Link>
    </nav>
  );
}