import { NavLink } from 'react-router-dom';
import '../../styles/headers/SecondaryHeaders.css';

function HomeHeader() {
  return (
    <div className="secondary-header">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
        Overview
      </NavLink>
    </div>
  )
}

export default HomeHeader;
