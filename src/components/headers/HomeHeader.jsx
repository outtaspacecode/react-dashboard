import { NavLink } from 'react-router-dom';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import '../../styles/headers/Subheaders.css';

function HomeHeader() {
  return (
    <div className="subheader">
      <NavLink end to="/home" className={({ isActive }) => isActive ? 'active-link' : ''}>
        <IoCodeSlashOutline size={18} />
        Welcome
      </NavLink>
      <NavLink to="stats" className={({ isActive}) => isActive ? 'active-link' : ''}>
        <TfiStatsUp size={18} />
        Statistics
      </NavLink>
    </div>
  )
}

export default HomeHeader;
