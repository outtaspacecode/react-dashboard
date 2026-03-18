import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScheduleProvider } from './context/ScheduleContext';
import GlobalHeader from './components/headers/GlobalHeader';
import TopBar from './components/TopBar';
import HomePage from './pages/Home/HomePage';
import OverviewTab from './pages/Home/OverviewTab';
import StatsTab from './pages/Home/StatsTab';
import TodoPage from './pages/TodoPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalHeader />
        <TopBar />
        <main className="main-content">
          <ScheduleProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />}>
                <Route index element={<OverviewTab />} />
                <Route path="stats" element={<StatsTab />} />
              </Route>
              <Route path="/todo" element={<TodoPage />} />
            </Routes>
          </ScheduleProvider>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App
