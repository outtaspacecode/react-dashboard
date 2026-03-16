import { NavLink } from 'react-router-dom';
import '../../styles/headers/GlobalHeader.css';
import navIcons from '../../assets/nav.sprite.svg';

function GlobalHeader() {
  return (
    <header>
      <nav>
        <div className="top-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link': ''}>
            <svg width="30" height="30" role="presentation">
              <use href={`${navIcons}#home`} />
            </svg>
          </NavLink>
          <NavLink to="/todo" className={({ isActive }) => isActive ? 'active-link': ''}>
            <svg width="30" height="30" role="presentation">
              <use href={`${navIcons}#grid`} />
            </svg>
          </NavLink>
          <NavLink to="/todo">
            <svg width="30" height="30" role="presentation">
              <use href={`${navIcons}#calendar`} />
            </svg>
          </NavLink>
        </div>
        <div className="bottom-links">
          <NavLink to="/">
            <svg width="30" height="30" role="presentation">
              <use href={`${navIcons}#settings`} />
            </svg>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default GlobalHeader;
