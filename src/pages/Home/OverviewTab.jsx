import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

function OverviewTab() {
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // TODO: This should eventually be stored in a state accesible via context but for now it's edited on the fly
  function changeAccent(color) {
    document.documentElement.style.setProperty('--accent', `var(--${color})`);
    document.documentElement.style.setProperty('--accent__hover', `var(--${color}__hover)`);
  }

  return (
    <>
      <div
        className="btn-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "200px",
          marginTop: "20px"
        }}
      >
        <button className="btn btn-pink" onClick={() => changeAccent('pink')}>Pink</button>
        <button className="btn btn-red" onClick={() => changeAccent('red')}>Red</button>
        <button className="btn btn-orange" onClick={() => changeAccent('orange')}>Orange</button>
        <button className="btn btn-yellow" onClick={() => changeAccent('yellow')}>Yellow</button>
        <button className="btn btn-green" onClick={() => changeAccent('green')}>Green</button>
        <button className="btn btn-blue" onClick={() => changeAccent('blue')}>Blue</button>
        <button className="btn btn-purple" onClick={() => changeAccent('purple')}>Purple</button>
        <br />
        <button className="btn btn-confirm">Confirm</button>
        <button className="btn btn-deny">Deny</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn">Base</button>
        <br />
        <a href="https://google.com" className="btn btn-yellow">Google</a>
        <Link className="btn btn-pink" to="/todo">To-Do</Link>
      </div>
    </>
  );
}

export default OverviewTab;
