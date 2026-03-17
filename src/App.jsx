import { Routes, Route, Link } from 'react-router-dom';
import GlobalHeader from './components/headers/GlobalHeader';
import HomePage from './pages/Home/HomePage';
import TodoPage from './pages/TodoPage';
import Footer from './components/Footer';
import OverviewTab from './pages/Home/OverviewTab';

function App() {
  return (
    <>
      <GlobalHeader />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<OverviewTab />} />
          </Route>
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
