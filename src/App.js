import React, { createContext, useState } from "react";
import {  BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LoggedInUserDestination from "./components/LoggedInUserDestination/LoggedInUserDestination";
import LoginAndResister from "./components/LoginAndResister/LoginAndResister";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext()
function App() {
  const [loggedInUser,setloggedInUser] = useState({});
  return (
    <div className="App">

    <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
      <Router>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/navbar" element={ <Navbar/> } />
            <Route path="/placeDetails/:id" element={ <PlaceDetails/> } />
            <Route path="/loginAndResister" element={ <LoginAndResister/> } />
            <Route path="/userDestination/:id" element={ <PrivateRoute>
              <LoggedInUserDestination/>
            </PrivateRoute> } />
            <Route path="/*" element={ <NotFound/> } />
          </Routes>
        </Router>
    </UserContext.Provider>

    </div>
  );
}

export default App;
