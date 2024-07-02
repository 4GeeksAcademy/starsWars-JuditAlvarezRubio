import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Single } from "./views/single";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Profile from "./views/profile.jsx";
import Vehicles from "./views/vehicles.jsx";
import Planets from "./views/planets.jsx";
import { AppProvider } from "./store/appContext.js";


const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <AppProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/vehicles/:id" element={<Vehicles />} />
            <Route path="/planets/:id" element={<Planets />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </AppProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Layout;
