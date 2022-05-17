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
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import LatestMeal from "./components/LatestMeals";
import RandomMeals from "./components/RandomMeals";
import Contact from "./components/Contact";
import TheAudioDb from "./pages/TheAudioDb";
import TheSportsDb from "./pages/TheSportsdb";
import TheMealDb from "./pages/TheMealDb";
import TheCoctailDb from "./pages/TheCoctailDb";
import Browse from "./pages/Browse";
import BrowseNavigation from "./components/BrowseNavigation";




const App = () => {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/randomMeal" element={<RandomMeals/>}/>
          <Route path="/latestMeal" element={<LatestMeal/>}/>
          <Route path="/meal/:id" element={<MealInfo />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/themealdb" element={<TheMealDb />}/>
          <Route path="/theaudiodb" element={<TheAudioDb />}/>
          <Route path="/thesportsdb" element={<TheSportsDb />}/>
          <Route path="/thecoctaildb" element={<TheCoctailDb />}/>
          <Route path="/browse/:name" element={<Browse />}/>
          <Route path="/browsenavigation/" element={<BrowseNavigation />}/>

      </Routes>
      < Footer />
  </BrowserRouter>
  );
};

export default App;

