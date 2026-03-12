import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
