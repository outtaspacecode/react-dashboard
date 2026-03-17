import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScheduleProvider } from './context/ScheduleContext';
import GlobalHeader from './components/headers/GlobalHeader';
import TopBar from './components/TopBar';
import HomePage from './pages/Home/HomePage';
import TodoPage from './pages/TodoPage';
import Footer from './components/Footer';
import OverviewTab from './pages/Home/OverviewTab';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalHeader />
        <TopBar />
        <main className="main-content">
          <ScheduleProvider>
            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route index element={<OverviewTab />} />
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
