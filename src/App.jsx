
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import LinkTopPosition from './components/LinkTopPosition';

function App() {

  return (
    <>
      <Header />
      <LinkTopPosition />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
