import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
