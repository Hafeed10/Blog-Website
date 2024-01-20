import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Login } from "../src/components/pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsPages } from "../src/components/pages/details/DetaisPages"
import { Account } from "../src/components/pages/account/Account";
import { Create } from "../src/components/create/Create";
import { Home } from "./components/pages/home/Home";
import Singup from "./components/pages/login/Singup";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' component={<Login/>} />
          <Route exact path='/register' component={<Singup/>} />
          <Route exact path='/details/:id' component={<DetailsPages/>} />
          <Route exact path='/account' component={<Account/>} />
          <Route exact path='/create' component={<Create/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
// export 'Switch' (imported as Switch) 'react-router-dom'
