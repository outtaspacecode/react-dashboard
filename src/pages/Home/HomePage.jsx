import { Outlet } from 'react-router-dom';
import HomeHeader from '../../components/headers/HomeHeader';

function HomePage() {

  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}

export default HomePage;
