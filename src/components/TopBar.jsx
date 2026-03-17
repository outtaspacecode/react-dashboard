import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LuMoon, LuSunMedium } from "react-icons/lu";
import '../styles/TopBar.css';

function TopBar() {
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <div className="top-bar">
      <button className="theme-btn-container" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="theme toggle">
        <div className={`theme-btn theme-btn-light ${theme === 'light' ? 'active-theme' : ''}`}>
          <LuSunMedium size={25} strokeWidth={1.6} />
        </div>
        <div className={`theme-btn theme-btn-dark ${theme === 'light' ? '' : 'active-theme'}`}>
          <LuMoon size={20} />
        </div>
      </button>
    </div>
  );
}

export default TopBar;
