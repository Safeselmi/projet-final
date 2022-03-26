import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion";
import ErreurPage from "./Pages/ErreurPage";
import AccueilClient from "./Pages/Client/AccueilClient";
import AccueilAdmin from "./Pages/Admin/AccueilAdmin";
import Apropos from "./Pages/Apropos";
import DropdownHome from "./Components/DropdownHome";
import DropdownUser from "./Components/DropdownUser";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import ListeArticle from "./Pages/Admin/ListeArticle";
import Cart from "./Pages/Shopping/Cart";

const LayoutWrapper = (Component) => {
  return (
    <div>
      <Header
        icon1={<DropdownHome />}
        icon2={<DropdownUser />}
        icon3={<FaShoppingCart />}
        icon4={<MdFavorite />}
      />
      <div className="min-h-[50vh]">
        <Component />
      </div>
      <Footer />
    </div>
  );
};

function MainRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/AccueilClient" element={LayoutWrapper(AccueilClient)} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Erreur" element={<ErreurPage />} />
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/Cart" element={<Cart />} />
          {/*<!--admin--!>*/}
          <Route path="/AccueilAdmin" element={<AccueilAdmin />} />
          <Route path="/AccueilAdmin/ListeArticle" element={<ListeArticle />} />
          {/* <Route path="/Contact" element={<Conatct />} />*/}
          <Route path="/Apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainRouter;
