import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavigation from "./components/layout/MainNavigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Brands from "./pages/Brands";
//import Card from './components/layout/Card';

function App() {
  return (
    <div className='App'>
      <>
        <Header />
        <MainNavigation />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/brands/all' element={<Brands />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          {/* <Route path='/brands/:name' component={<Card/>} /> */}

        </Routes>

        <Footer />
      </>
    </div>
  )
}

export default App;
