import { Routes, Route, Link } from 'react-router-dom';
import GlobalHeader from './components/headers/GlobalHeader';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalHeader />
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
