import { NavLink } from 'react-router-dom';
import '../../styles/headers/GlobalHeader.css';
import weatherIcons from '../../assets/weather.sprite.svg';

function GlobalHeader() {
  return (
    <header>
      <nav>
        <div className="top-links">
          <NavLink to="/">
            <svg width="50" height="50" role="presentation">
              <use href={`${weatherIcons}#sun`} />
            </svg>
          </NavLink>
          <NavLink to="/todo">
            <svg width="50" height="50" role="presentation">
              <use href={`${weatherIcons}#moon`} />
            </svg>
          </NavLink>
        </div>
        <div className="bottom-links">
          <NavLink to="/">
            <svg width="50" height="50" role="presentation">
              <use href={`${weatherIcons}#cloudy`} />
            </svg>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default GlobalHeader;
