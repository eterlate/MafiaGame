import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './Router';
import { ToastContainer } from 'react-toastify';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import { useAppSelector } from './hooks/Redux.hook';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { token } = useAppSelector(state => state.auth)
  const routes = useRoutes(!!token)

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        {routes}
      </div>
      <ToastContainer />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
