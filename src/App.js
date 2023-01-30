import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import PropertiesDetail from "./pages/PropertiesDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container mx-auto bg-white">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/property/:id" element ={<PropertiesDetail/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
