import React from "react";
import {  BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LoggedInUserDestination from "./components/LoggedInUserDestination/LoggedInUserDestination";
import LoginAndResister from "./components/LoginAndResister/LoginAndResister";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/navbar" element={ <Navbar/> } />
          <Route path="/placeDetails/:id" element={ <PlaceDetails/> } />
          <Route path="/loginAndResister" element={ <LoginAndResister/> } />
          <Route path="/userDestination/:id" element={ <LoggedInUserDestination/> } />
          <Route path="/*" element={ <NotFound/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
