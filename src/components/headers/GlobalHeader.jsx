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
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link': ''}>
            <GoHome size={30} strokeWidth={0.3} />
          </NavLink>
          <NavLink to="/todo" className={({ isActive }) => isActive ? 'active-link': ''}>
            <TbLayoutGrid size={30} strokeWidth={1.8} />
          </NavLink>
          <NavLink to="/todo">
            <CiCalendar size={30} strokeWidth={0.75} />
          </NavLink>
        </div>
        <div className="bottom-links">
          <NavLink to="/">
            <IoSettingsOutline size={30} />
          </NavLink>
          <NavLink to="/">
            <FiLogOut size={25} strokeWidth={2} />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default GlobalHeader;
