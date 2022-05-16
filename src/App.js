import './App.css';
import React from 'react';
import {BrowserRouter,
        Routes,
        Route

} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MealInfo from "./pages/MealInfo";
import Header from "./components/Header";




const App = () => {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/meal/:id" element={<MealInfo />}/>
      </Routes>
  </BrowserRouter>
  );
};

export default App;

