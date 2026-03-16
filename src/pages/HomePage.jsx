import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TodoItem } from '../components/Todo';
import weatherIcons from '../assets/weather.sprite.svg';

function HomePage() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <TodoItem />
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
        <button className="btn btn-pink">Pink</button>
        <button className="btn btn-red">Red</button>
        <button className="btn btn-orange">Orange</button>
        <button className="btn btn-yellow">Yellow</button>
        <button className="btn btn-green">Green</button>
        <button className="btn btn-blue">Blue</button>
        <button className="btn btn-purple">Purple</button>
        <br />
        <button className="btn btn-confirm">Confirm</button>
        <button className="btn btn-deny">Deny</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn">Base</button>
        <button
          className="btn btn-purple"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Change Theme
        </button>
        <br />
        <a href="https://google.com" className="btn btn-yellow">Google</a>
        <Link className="btn btn-pink" to="/todo">To-Do</Link>
        <svg width="80" height="80" className="icon" role="img" style={{fill: "var(--text-color)"}}>
          <use href={`${weatherIcons}#sun`} />
        </svg>
        <svg width="80" height="80" className="icon" role="img" style={{fill: "var(--text-color)"}}>
          <use href={`${weatherIcons}#moon`} />
        </svg>
      </div>
    </>
  );
}

export default HomePage;
