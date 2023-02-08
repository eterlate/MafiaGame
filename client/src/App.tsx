import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './Router';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Header from './components/Header';
import { useAppSelector } from './hooks/Redux.hook';

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
