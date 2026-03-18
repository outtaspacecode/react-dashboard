import { NavLink } from 'react-router-dom';
import '../../styles/headers/GlobalHeader.css';
import { GoHome } from 'react-icons/go';
import { TbLayoutGrid } from 'react-icons/tb';
import { CiCalendar } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

function GlobalHeader() {
  return (
    <header>
      <nav>
        <div className="top-links">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active-link': ''} aria-label="Home">
            <GoHome size={30} strokeWidth={0.3} />
          </NavLink>
          <NavLink to="/todo" className={({ isActive }) => isActive ? 'active-link': ''} aria-label="Dashboard">
            <TbLayoutGrid size={30} strokeWidth={1.8} />
          </NavLink>
          <NavLink to="/todo" aria-label="Events">
            <CiCalendar size={30} strokeWidth={0.75} />
          </NavLink>
        </div>
        <div className="bottom-links">
          <NavLink to="/" aria-label="Settings">
            <IoSettingsOutline size={30} />
          </NavLink>
          <NavLink to="/" aria-label="Log out">
            <FiLogOut size={25} strokeWidth={2} />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default GlobalHeader;
